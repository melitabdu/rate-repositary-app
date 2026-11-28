
import { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    console.log({
      username,
      password,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <Button
        title="Sign in"
        onPress={onSubmit}
      />
    </View>
  );
};

export default SignIn;
