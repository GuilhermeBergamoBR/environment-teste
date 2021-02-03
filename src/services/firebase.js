import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

export default {
  store: async (image) => {
    const reference = await storage().ref(`${Math.random()}.png`);

    await reference.putFile(image)
      .then(() => {
        firestore()
          .collection('Photos')
          .add({ _id: Math.random(), image, created_at: new Date() })
      })
  }
}