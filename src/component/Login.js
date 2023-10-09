import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {setUserName} from '../redux/userActions';

const Login = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  ///////////////////////////////////////////////////////////////////////////////////
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setUserName(name));
    // Navigate to LogoutScreen using navigation

    navigation.navigate('Logout');
  };

  ////////////////////////////////////////////////////////////////////////////////////

  return (
    <View style={styles.container}>
      <Text style={styles.user_text}>Login Here</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setName(text)}
        value={name}
        placeholder="Enter your name"
        placeholderTextColor={'black'}
      />

      <TextInput
        style={styles.input}
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder="Enter your email"
        placeholderTextColor={'black'}
      />

      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="Enter your password"
        placeholderTextColor={'black'}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 30,
    color:"black"
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  user_text: {
    color: 'black',
    fontSize: 28,
    fontWeight: '700',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 100
  },
});

export default Login;
