import { View, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

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

  tabs: {
    flexDirection: 'row',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Repositories
      </Text>

      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.tabs}
      >
        <AppBarTab title="Repositories" to="/" />
        <AppBarTab title="Sign in" to="/signin" />
        <AppBarTab title="Tab 3" to="/" />
        <AppBarTab title="Tab 4" to="/" />
        <AppBarTab title="Tab 5" to="/" />
        <AppBarTab title="Tab 6" to="/" />
      </ScrollView>
    </View>
  );
};

export default AppBar;