import { Pressable, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  tab: {
    padding: 15,
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const AppBarTab = ({ title, to }) => {
  return (
    <Link to={to} component={Pressable} style={styles.tab}>
      <Text style={styles.text}>{title}</Text>
    </Link>
  );
};

export default AppBarTab;