// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
import * as functions from 'firebase-functions';

// The Firebase Admin SDK to access Firebase Features from within Cloud Functions.
import * as admin from 'firebase-admin';
admin.initializeApp();

// Set up extra settings. Since May 29, 2020, Firebase Firebase Added support for
// calling FirebaseFiresore.settings with { ignoreUndefinedProperties: true }.
// When this parameter is set, Cloud Firestore ignores undefined properties
// inside objects rather than rejecting the API call.
admin.firestore().settings({
  ignoreUndefinedProperties: true,
});

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  response.send('Hello from Firebase!');
});

export const updateBgValue = functions.firestore
  .document('events/{id}')
  .onCreate(async (snap, ctx) => {
    functions.logger.info('Hello logs!', { structuredData: true }, ctx);
    let newData: any = {
      extra: 'zoaa',
    };
    const mgValue = snap.data().mgValue;
    if (mgValue) {
      newData = { ...newData, mmolValue: mgValue * 0.0555 };
    }
    return await snap.ref.set(newData, { merge: true });
  });
