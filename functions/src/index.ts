import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  console.log(JSON.stringify(request.body));
  console.log(JSON.stringify(request.query));
  response.send(true);
});