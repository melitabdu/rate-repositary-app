
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
  },

  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Repositories
      </Text>
    </View>
  );
};

export default AppBar;
