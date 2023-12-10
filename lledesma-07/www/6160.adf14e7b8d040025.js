"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6160],{6160:(I,p,l)=>{l.r(p),l.d(p,{CosasFeasPageModule:()=>J});var h=l(6814),x=l(95),i=l(6728),v=l(3912),Z=l(15),_=l(3035),f=l(4454),t=l(6689),b=l(9680),F=l(6593),T=l(4340),P=l(833),C=l(9739);let A=(()=>{var o;class r{constructor(e){this.fotosService=e,this.fotos=[]}ngOnInit(){this.traerObjetos()}traerObjetos(){this.fotosService.getFotos(f.P.Fea).subscribe(e=>{this.fotos=e,this.createChart()})}mostrarFecha(e){return e.toDate().toLocaleString()}createChart(){let e=[],a=[];this.fotos.forEach((s,c)=>{let g=s.votos.filter(d=>"up"===d.tipo).length,u=s.votos.filter(d=>"down"===d.tipo).length;e.push({label:s.email+" - "+this.mostrarFecha(s.fecha),labels:["Me gusta","No me gusta"],data:[g,u],backgroundColor:["green","red"]}),a.push(s.email+" - "+this.mostrarFecha(s.fecha))}),C.kL.defaults.font.size=18,this.chart=new C.kL("MyChart",{type:"bar",data:{labels:["Me gusta","No me gusta"],datasets:e},options:{plugins:{legend:{display:!0,position:"bottom"},tooltip:{enabled:!0,position:"nearest",external:function(s){console.log(s.chart.data)}}},scales:{x:{beginAtZero:!0},y:{beginAtZero:!0}}}})}}return(o=r).\u0275fac=function(e){return new(e||o)(t.Y36(b.H))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-g-barra"]],decls:5,vars:1,consts:[[1,"chart-container","my-3"],[1,"text-center","text-dark","display-6","mt-4",2,"font-size","1.5rem","font-weight","300"],["id","MyChart"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Votos de cosas feas"),t.qZA(),t.TgZ(3,"canvas",2),t._uU(4),t.qZA()()),2&e&&(t.xp6(4),t.Oqu(a.chart))}}),r})();const y=["imagen"];function M(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"ion-list")(1,"div",22)(2,"div",23),t._uU(3),t.qZA(),t.TgZ(4,"div",24),t._UZ(5,"img",25),t.qZA(),t.TgZ(6,"div",26)(7,"div",27)(8,"div",28)(9,"ion-icon",29),t.NdJ("click",function(){const s=t.CHM(n).$implicit,c=t.oxw(2);return t.KtG(c.votoArriba(s))}),t.qZA(),t.TgZ(10,"ion-label"),t._uU(11),t.qZA()(),t.TgZ(12,"div",28)(13,"ion-icon",30),t.NdJ("click",function(){const s=t.CHM(n).$implicit,c=t.oxw(2);return t.KtG(c.votoAbajo(s))}),t.qZA(),t.TgZ(14,"ion-label"),t._uU(15),t.qZA()()()()()()}if(2&o){const n=r.$implicit,e=t.oxw(2);t.xp6(3),t.AsE(" ",e.mostrarFecha(n.fecha)," - ",n.email," "),t.xp6(2),t.s9C("alt",n.cosa),t.s9C("src",n.base64,t.LSH),t.xp6(4),t.Q6J("name",e.getVotoTipo(n,"up")?"thumbs-up":"thumbs-up-outline"),t.xp6(2),t.Oqu(e.getCantidadVotos(n,"up")),t.xp6(2),t.Q6J("name",e.getVotoTipo(n,"down")?"thumbs-down":"thumbs-down-outline"),t.xp6(2),t.Oqu(e.getCantidadVotos(n,"down"))}}function k(o,r){1&o&&(t.TgZ(0,"div")(1,"ion-list",31)(2,"h1",31),t._uU(3,"No hay fotos cargadas"),t.qZA()()())}function S(o,r){if(1&o&&(t.TgZ(0,"ion-card",18)(1,"ion-card-header")(2,"ion-card-title")(3,"h1",19),t._uU(4,"Fotos de cosas feas"),t.qZA()(),t._UZ(5,"br"),t.qZA(),t.TgZ(6,"ion-card-content"),t.YNc(7,M,16,8,"ion-list",20),t.YNc(8,k,4,0,"div",21),t.qZA()()),2&o){const n=t.oxw();t.xp6(7),t.Q6J("ngForOf",n.cosas),t.xp6(1),t.Q6J("ngIf",0==n.cosas.length)}}function O(o,r){1&o&&(t.TgZ(0,"ion-content"),t._UZ(1,"app-g-barra"),t.qZA())}const z=function(){return[0,.5,1]},U=[{path:"",component:(()=>{var o;class r{constructor(e,a,s,c){this.fotosService=e,this.sanitizer=a,this.auth=s,this.interceptor=c,this.cosas=[]}ngOnDestroy(){var e;null===(e=this.cosasSub)||void 0===e||e.unsubscribe()}loadImg(e){var a;const s=null===(a=this.imagen)||void 0===a?void 0:a.nativeElement;var c=s.naturalWidth,g=s.naturalHeight,u=document.createElement("canvas");c>g?c>350&&(g*=350/c,c=350):g>250&&(c*=250/g,g=250),u.width=c,u.height=g,u.getContext("2d").drawImage(s,0,0,c,g);var V=u.toDataURL();let H=new _.T("",f.P.Fea,V,this.auth.userLogged.email,Z.EK.now());this.fotosService.uploadFoto(H)}ngOnInit(){this.interceptor.updateOverlayState(!0),this.cosasSub=this.fotosService.getFotos(f.P.Fea).subscribe(e=>{this.interceptor.updateOverlayState(!1),this.cosas=e})}subirFoto(){this.fotosService.takePhoto().then(e=>{this.fotoSrc=this.sanitizer.bypassSecurityTrustUrl(`${"data:image/"+e.format+";base64,"} ${e.base64String}`)})}mostrarFecha(e){return e.toDate().toLocaleString()}votar(e,a){this.getVoto(e)?this.getVotoTipo(e,a)?this.fotosService.revertirVoto(e,this.auth.userLogged.email):this.fotosService.deleteVoto(e,this.auth.userLogged.email):this.fotosService.addVoto(e,this.auth.userLogged.email,a)}votoArriba(e){this.votar(e,"up")}votoAbajo(e){this.votar(e,"down")}getVotoTipo(e,a){return e.votos.some(s=>s.email==this.auth.userLogged.email&&s.tipo==a)}getVoto(e){return e.votos.some(a=>a.email==this.auth.userLogged.email)}getCantidadVotos(e,a){return e.votos.filter(s=>s.tipo==a).length}}return(o=r).\u0275fac=function(e){return new(e||o)(t.Y36(b.H),t.Y36(F.H7),t.Y36(T.D),t.Y36(P._))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-cosas-feas"]],viewQuery:function(e,a){if(1&e&&t.Gf(y,5),2&e){let s;t.iGM(s=t.CRH())&&(a.imagen=s.first)}},decls:24,vars:7,consts:[[3,"translucent"],["slot","start"],["default-href","#"],[3,"fullscreen"],["collapse","condense"],["size","large"],["class","mt-1 mb-5",4,"ngIf"],["trigger","open-modal",3,"initialBreakpoint","breakpoints"],["modal",""],["slot","fixed","vertical","bottom","horizontal","start"],["color","success","size","large",3,"click"],["name","camera-sharp","size","large"],["slot","fixed","vertical","bottom","horizontal","end"],["id","open-modal","color","success"],["name","stats-chart","size","large"],[2,"display","none"],["alt","foto",3,"src","load"],["imagen",""],[1,"mt-1","mb-5"],[1,"text-light","text-center"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"row","border-bottom","border-1","border-light"],[1,"fecha","text-center"],[1,"d-flex","justify-content-center",2,"max-height","15rem","overflow","scroll"],[3,"alt","src"],[1,"row","py-2","m-0",2,"background-color","black"],[1,"d-flex","justify-content-around","align-items-center"],[1,"d-flex","flex-column"],["color","success","size","large",3,"name","click"],["color","danger","size","large",3,"name","click"],[1,"text-center"]],template:function(e,a){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),t._UZ(3,"ion-back-button",2),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"Cosas feas"),t.qZA()()(),t.TgZ(6,"ion-content",3)(7,"ion-header",4)(8,"ion-toolbar")(9,"ion-title",5),t._uU(10,"Cosas feas"),t.qZA()()(),t.YNc(11,S,9,2,"ion-card",6),t.TgZ(12,"ion-modal",7,8),t.YNc(14,O,2,0,"ng-template"),t.qZA(),t.TgZ(15,"ion-fab",9)(16,"ion-fab-button",10),t.NdJ("click",function(){return a.subirFoto()}),t._UZ(17,"ion-icon",11),t.qZA()(),t.TgZ(18,"ion-fab",12)(19,"ion-fab-button",13),t._UZ(20,"ion-icon",14),t.qZA()()(),t.TgZ(21,"div",15)(22,"img",16,17),t.NdJ("load",function(c){return a.loadImg(c)}),t.qZA()()),2&e&&(t.Q6J("translucent",!0),t.xp6(6),t.Q6J("fullscreen",!0),t.xp6(5),t.Q6J("ngIf",0!=a.cosas.length),t.xp6(1),t.Q6J("initialBreakpoint",.5)("breakpoints",t.DdM(6,z)),t.xp6(10),t.Q6J("src",a.fotoSrc,t.LSH))},dependencies:[h.sg,h.O5,i.Sm,i.PM,i.FN,i.Zi,i.Dq,i.W2,i.IJ,i.W4,i.Gu,i.gu,i.Q$,i.q_,i.wd,i.sr,i.ki,i.oU,A],styles:[".miBtn[_ngcontent-%COMP%]{height:100px;font-size:20px}ion-fab-button[_ngcontent-%COMP%]{height:80px;width:80px}ion-content[_ngcontent-%COMP%]{background-image:url(bg.a3f5591984efe0ee.png);background-repeat:no-repeat;background-size:100% 100%;background-color:#ccc;height:100%;width:100%}#background-content[_ngcontent-%COMP%]{background:transparent}.fecha[_ngcontent-%COMP%]{color:#fff}ion-card-content[_ngcontent-%COMP%]{background:darkred}ion-card-header[_ngcontent-%COMP%]{background:darkred}ion-list[_ngcontent-%COMP%]{background:darkred}ion-label[_ngcontent-%COMP%]{font-size:25px}"]}),r})()}];let w=(()=>{var o;class r{}return(o=r).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[v.Bz.forChild(U),v.Bz]}),r})(),J=(()=>{var o;class r{}return(o=r).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[h.ez,x.u5,i.Pc,w]}),r})()}}]);