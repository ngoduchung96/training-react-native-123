import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default {
  registerUserApi: async (params) => {
    const register = await auth()
      .createUserWithEmailAndPassword(params.email, params.password)
      .then((user) => {
        console.log('auth user', user);
      })
      .catch((error) => console.log('auth error', error));
    return true;
  },
  loginUserApi: async (params) => {
    const login = await auth()
      .signInWithEmailAndPassword(params.email, params.password)
      .then((user) => {
        console.log('auth user', user);
      })
      .catch((error) => {
        console.log('auth error', error);
        return false;
      });
    return true;
  },
  logoutApi: async (params) => {
    await auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    return true;
  },
};
