// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyBvbRrcj0CZIrrKE8djp6hGHL6dZHkofQI",
    authDomain: "pps-2c2023.firebaseapp.com",
    databaseURL: "https://pps-2c2023-default-rtdb.firebaseio.com",
    projectId: "pps-2c2023",
    storageBucket: "pps-2c2023.appspot.com",
    messagingSenderId: "240194263455",
    appId: "1:240194263455:web:827998c1455b09e13945aa",
    measurementId: "G-S4BX2EV1LT"
  },
  fcmUrl: 'https://fcm.googleapis.com/v1/projects/pps-tp-grupal/messages:send',
  fcmServerKey: 'AAAA4HsKOlw:APA91bFleJYw4Qbr7mO2GTzE91ssG-E8jfzDWNjozFXJZYI-fBkWr_-eEeT7kvXCcD6hqeLfeiNOMlHU8Sv6dLhF8129yPAopI6FQXFsFBbPZrdyOY3co3GEDLK5qfp3-MiWDTqNDNEM',  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
