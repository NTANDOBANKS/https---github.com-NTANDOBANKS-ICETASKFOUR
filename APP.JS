import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const App = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');   


 
  const correctUsername = 'admin';
  const correctPassword = 'password123';

 
  const handleLogin = () => {
    if (username === correctUsername && password === correctPassword) {
      setMessage('Login successful!');
    } else {
      setMessage('Username or password is incorrect.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        value={username}
        onChangeText={setUsername}
      />

      {/* Password Input */}
      <Text style={{ marginBottom: 12 }}>Password:</Text>  {/* Password hint */}

      {/* Secure Text Entry */}

      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        value={password}
        secureTextEntry={true}
        onChangeText={setPassword}
      />

   
      <Button title="Login" onPress={handleLogin} />

      {/* Message Display */}
      {message && <Text style={styles.message}>{message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',   

    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal:   
 10,
  },
  message: {
    marginTop: 10,
    fontSize: 18,
    color: 'red',
  },
});

export default App;

//REFERENCING
//W3Schools (n.d.). JavaScript Operators. [online] www.w3schools.com. Available at: https://www.w3schools.com/js/js_operators.asp.[Acessed on 25 september 2024]
//W3schools (2019). Java Tutorial. [online] W3schools.com. Available at: https://www.w3schools.com/java/default.asp.[Accessed on 25 september 2024]
