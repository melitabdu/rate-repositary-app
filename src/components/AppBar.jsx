import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#ffffff', padding: 15 }}>
        Repositories
      </Text>
    </View>
  );
};

export default AppBar;
