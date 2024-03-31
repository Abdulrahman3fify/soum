import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'lightgray',
  },
  container: {
    // paddingVertical: 20,
    // width: 200,
  },
  nodeContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 20,
    backgroundColor: 'lightgray',
  },
  checkbox: {
    marginRight: 6, // Adjust according to your design
    backgroundColor: 'red',
  },
  nodeButton: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  nodeText: {
    fontSize: 14,
    color: '#333333',
    fontWeight: 'bold',
  },
  childrenContainer: {
    // paddingLeft: 20,
    // backgroundColor: 'red',
    alignSelf: 'flex-start',
  },
  iconStyle: {
    marginRight: 10,
  },
  selectedNode: {
    backgroundColor: '#DDDDDD',
  },
});

export default styles;
