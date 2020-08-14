import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';

export const createAccount = async (email, password) => {
  return auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      return 'success';
    })
    .catch((error) => {
      return error.message;
    });
};

export const loginToAccount = async (email, password) => {
  return auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      return 'success';
    })
    .catch((error) => {
      return error.message;
    });
};

export const signInWithGoogleAccount = async () => {
  try {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const signInResult = await auth().signInWithCredential(googleCredential);
    return signInResult;
  } catch (error) {
    return 'sign_in_error';
  }
};
