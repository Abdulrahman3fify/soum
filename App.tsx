import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TreeViewList} from './src/components/TreeViewList';
import {LIST_DATA} from './src/constants/listData';

const App = () => {
  return (
    <View style={styles.container}>
      <TreeViewList data={LIST_DATA} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
