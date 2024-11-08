/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button, Modal,
  SafeAreaView,
  StyleSheet,
   TextInput,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Button title={"This is React Native 0.76.1"} onPress={() =>setShowModal(true)} />
      <Modal visible={showModal} transparent statusBarTranslucent={true}>
        <View style={{flexGrow: 1, justifyContent: "center", alignItems: "center", flexDirection: 'column'}}>
          <View style={{ padding: 20, backgroundColor: "white"}}>
            <TextInput placeholder={"Click here to write"}/>
            <Button title={"Close"} onPress={() => setShowModal(false)}/>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
});

export default App;

