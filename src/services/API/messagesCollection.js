import firestore from '@react-native-firebase/firestore';

const getAllDataFromMessagesCollection = async () => {
  const {_data} = await firestore()
    .collection('messages')
    .doc('Xb5K0HfJMqYjZmBaAab2')
    .get();
  console.log('data', _data);
  return _data;
};

const registerUser = async (params) => {
  firestore()
    .collection('users')
    .add(params)
    .then(() => console.log('add User success'));
};

module.exports = {
  getAllDataFromMessagesCollection,
  registerUser
};
