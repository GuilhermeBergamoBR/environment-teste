import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import auth from '@react-native-firebase/auth';
import options from './utils/options'
import photo from './services/firebase'

const App = () => {
  const [uri, setUri] = useState(null)
  useEffect(() => {
    auth().signInAnonymously()
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar barStyle="dark-content" />
      {uri && <Text>{uri}</Text>}
      <TouchableOpacity
        style={{ backgroundColor: '#0f0', width: '90%', alignItems: 'center', paddingTop: 10, paddingBottom: 10, borderRadius: 10 }}
        onPress={() => launchCamera(options, (res) => {
          photo.store(res.uri)
          setUri(res.uri)
        })}>
        <Text style={{ color: '#fff', fontSize: 18, fontWeight: '700' }}>Tirar foto</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
