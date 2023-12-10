import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { PluginListenerHandle } from '@capacitor/core';
import { Motion } from '@capacitor/motion';
import { DomController, GestureController, IonModal } from '@ionic/angular';
import { Timestamp } from 'firebase/firestore';
import { Subscription } from 'rxjs';
import { Foto } from 'src/app/classes/foto';
import { TipoCosa } from 'src/app/enums/tipoCosa';
import { AuthFirebaseService } from 'src/app/services/authFirebase.service';
import { FotosService } from 'src/app/services/fotos.service';
import { InterceptorService } from 'src/app/services/interceptor.service';

@Component({
  selector: 'app-cosas-lindas',
  templateUrl: './cosas-lindas.page.html',
  styleUrls: ['./cosas-lindas.page.scss'],
})
export class CosasLindasPage implements OnInit, OnDestroy {
  fotoSrc!: SafeUrl
  cosasSub!: Subscription

  cosas: Foto[] = []
  fotosUp: SafeUrl[] = []
  fotosUploadFinish: Foto[] = []
  motionListener?: PluginListenerHandle;
  indiceActual: number = 0
  fotoActual!: Foto

  constructor(private gestureCtrl: GestureController,
    private domCtrl: DomController,
    private fotosService: FotosService, private sanitizer: DomSanitizer, private auth: AuthFirebaseService, private interceptor: InterceptorService) { }
  ngOnDestroy(): void {
    this.cosasSub?.unsubscribe();
    this.detenerSensor();
  }
  
  loadImg(imagenRef: HTMLImageElement, event: any) {

    const img = imagenRef
    var width = img.naturalWidth;
    var height = img.naturalHeight;

    var canvas = document.createElement('canvas');
    var MAX_WIDTH = 350;
    var MAX_HEIGHT = 250;

    if (width > height) {
      if (width > MAX_WIDTH) {
        height *= MAX_WIDTH / width;
        width = MAX_WIDTH;
      }
    } else {
      if (height > MAX_HEIGHT) {
        width *= MAX_HEIGHT / height;
        height = MAX_HEIGHT;
      }
    }
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext('2d');
    ctx!.drawImage(img, 0, 0, width, height);
    var result = canvas.toDataURL();


    let foto: Foto = new Foto('', TipoCosa.Linda, result, this.auth.userLogged.email, Timestamp.now())
    this.fotosUploadFinish.unshift(foto)
  }

  ngOnInit() {
    this.interceptor.updateOverlayState(true) ;
    this.cosasSub = this.fotosService.getFotos(TipoCosa.Linda).subscribe(fotos => {
      this.interceptor.updateOverlayState(false) ;
      this.cosas = fotos

      
      this.fotoActual = fotos[this.indiceActual]
      this.iniciarSensor();
    })

  }

  capturarFoto() {
    this.fotosService.takePhoto().then((photo) => {
      let data = "data:image/" + photo.format + ";base64,"
      this.fotosUp.push(this.sanitizer.bypassSecurityTrustUrl(`${data} ${photo.base64String}`));
      this.openModal()
    })
  }

  mostrarFecha(fecha: Timestamp) {
    return fecha.toDate().toLocaleString();
  }

  votar(foto:Foto,tipo:'up'|'down'){
    if (!this.getVoto(foto)) {
      this.fotosService.addVoto(foto, this.auth.userLogged.email, tipo)
    } else {
      if(!this.getVotoTipo(foto,tipo))
      {
        this.fotosService.deleteVoto(foto, this.auth.userLogged.email)
      }else{
        this.fotosService.revertirVoto(foto, this.auth.userLogged.email)
      }
    }
  }

  votoArriba(foto: Foto) {
    this.votar(foto,'up')    
  }

  votoAbajo(foto: Foto) {
  this.votar(foto,'down')
  }

  getVotoTipo(foto: Foto, tipo: 'up' | 'down') {
    return foto.votos.some(voto => voto.email == this.auth.userLogged.email && voto.tipo == tipo)

  }

  getVoto(foto: Foto) {
    return foto.votos.some(voto => voto.email == this.auth.userLogged.email)
  }

  getCantidadVotos(foto: Foto,tipo:'up'|'down') {
    return foto.votos.filter(voto => voto.tipo == tipo).length  
  }

 

  @ViewChild('addPhotosModal') modal!: IonModal;
  openModal() {
    this.modal.present()
    this.modal.onDidDismiss().then(() => {this.fotosUploadFinish = []})
  }

  async subirFotos() {
    this.fotosUploadFinish.forEach(async foto => {
      await this.fotosService.uploadFoto(foto);
    })

    this.modal.dismiss()
  }

  delFoto(foto:Foto) {
    this.fotosUploadFinish = this.fotosUploadFinish.filter(f => f != foto)
  }

  mostrarSiguienteFoto() {
    if (this.indiceActual < this.cosas.length - 1) {
      this.indiceActual++;
      this.actualizarVista();
    }
  }

  mostrarFotoAnterior() {
    if (this.indiceActual > 0) {
      this.indiceActual--;
      this.actualizarVista();
    }
  }

  private actualizarVista() {
    this.fotoActual = this.cosas[this.indiceActual]
  }

  async pedirPermiso() {
    await (DeviceMotionEvent as any).requestPermission();
  }
  detenerSensor() {
    // Detén la escucha del acelerómetro cuando el componente se destruye
    this.motionListener?.remove();
  }

  ultimoCambio = new Date().getTime();
  volvio = true
  levanto = true;

  iniciarSensor() {
    // Comienza a escuchar los eventos del acelerómetro
    this.motionListener = Motion.addListener('orientation', (data) => {

      let ahora = new Date().getTime();
      // const rotationAlpha = data.alpha;
      const rotationBeta = data.beta;
      const rotationGamma = data.gamma;
      
        this.ultimoCambio = ahora;
        if (rotationGamma < -50 && this.volvio) {          
          this.mostrarFotoAnterior();
          this.volvio = false
        }
        else if (rotationGamma > 50 && this.volvio) {
          this.mostrarSiguienteFoto();
          this.volvio = false
        }
        else if(rotationGamma == 0){
          console.log('volvio');
          this.volvio = true
        }
        else if (rotationBeta == 0) {
          if(this.levanto)
          {
            this.indiceActual = 0
            this.actualizarVista();
            this.levanto = false
          }
        }else if(rotationBeta > 40)
        {
          this.levanto = true        
        }
    })
  }

}
