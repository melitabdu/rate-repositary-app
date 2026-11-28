import { StatusBar } from 'expo-status-bar';
import Main from './src/Main';
import { NativeRouter } from 'react-router-native';

const App = () => {
  return (
    <NativeRouter>
      <StatusBar style="light" />
      <Main />
    </NativeRouter>
  );
};

export default App;