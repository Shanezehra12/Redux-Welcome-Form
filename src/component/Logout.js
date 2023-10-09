import {Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const Logout = ({navigation}) => {
  const userName = useSelector(state => state.user.userName);

  return (
    <View style={styles.logout}>
      <Text style={styles.user_text}>Welcome,</Text>
      <Text style={styles.user__name}>{userName}!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  logout: {
    display: 'flex',
    flexdirection: 'column',
    alignitems: 'center',
    justifycontent: 'center',
    height: 100,
    fontfamily: 'Inter',
    alignSelf: 'center',
    margin: 90,
    marginTop: 200,
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

  user__name: {
    color: '#8d0ada',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },

  user_text: {
    color: 'black',
    fontSize: 28,
    fontWeight: '700',
    alignSelf: 'center',
    marginBottom: 10,
  },
});
