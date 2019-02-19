// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyA0-qXDC2iVfitEiAD_EonyXektpDRVkFk",
    authDomain: "fir-auth-7b5d8.firebaseapp.com",
    databaseURL: "https://fir-auth-7b5d8.firebaseio.com",
    projectId: "fir-auth-7b5d8",
    storageBucket: "fir-auth-7b5d8.appspot.com",
    messagingSenderId: "404412576606"
  },
  mailApi: '/assets/list.json'
};
export const palete = {
    primary: '#D32F2F',
    accent: '#E65100',
    warm: '#C2185B',
    name: '#D50000',
    secondary: '#D81B60',
    tertiary: '#8E24AA',
    quaternary: '#5E35B1',
    quinary: '#3949AB',
    secondaryLight: '#E91E63',
    tertiaryLight: '#9C27B0',
    quaternaryLight: '#673AB7',
    quinaryLight: '#3F51B5'
}
