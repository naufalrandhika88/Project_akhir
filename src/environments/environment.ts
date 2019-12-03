// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
 
  firebase: {
    apiKey: "AIzaSyCqDdXPd50X7J_lCesuffolQpAkXdiPwPk",
    authDomain: "forest-be91e.firebaseapp.com",
    databaseURL: "https://forest-be91e.firebaseio.com",
    projectId: "forest-be91e",
    storageBucket: "forest-be91e.appspot.com",
    messagingSenderId: "360939311719",
    appId: "1:360939311719:web:c23408abbbc0a34036bac2",
    measurementId: "G-GTKVLGJTTK"
  },

  //apiUrl: "https://newsapi.org/v2",
  //apiKey: "b6221a427d4243929a5449b21632dd51"
  
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
