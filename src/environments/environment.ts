// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {Environment} from './interface';

export const environment: Environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBOAr3rwhqMPyhvFuJM7FkzRx4B56vwbWM',
    authDomain: 'shop-97ec3.firebaseapp.com',
    databaseURL: 'https://shop-97ec3.firebaseio.com',
    projectId: 'shop-97ec3',
    storageBucket: 'shop-97ec3.appspot.com',
    messagingSenderId: '281536630631',
    appId: '1:281536630631:web:044f3e1a5b7299c64129c2'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
