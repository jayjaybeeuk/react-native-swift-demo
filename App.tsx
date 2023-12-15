/**
 * React speaks to Swift and Swift speaks to React
 */

import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  NativeModules,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

NativeModules.NimbleComms.setName('Eric Morecambe');

const App = () => {
  let [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    NativeModules.NimbleComms.getData((first, second) => {
      setDataArray([first, second]);
    });
  }, []);

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.lighter} />
      <View style={styles.container}>
        {dataArray.map(data => (
          <View>
            {console.log(data)}
            <Text>{data}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
