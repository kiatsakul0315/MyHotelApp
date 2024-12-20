import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button, StyleSheet, Text } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      window.alert('ข้อมูลไม่ครบถ้วน\nกรุณากรอกอีเมลและรหัสผ่าน');
      return;
    }

    const correctEmail = 'user'; 
    const correctPassword = 'abc123'; 

    // ตรวจสอบอีเมลและรหัสผ่าน
    if (email === correctEmail && password === correctPassword) {
      const userData = { username: email, email }; 
      navigation.navigate('Profile', { user: userData });
    } else {
      window.alert('ข้อมูลไม่ถูกต้อง\nกรุณาตรวจสอบอีเมลและรหัสผ่านของคุณ');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> ระบบจองห้องพัก </Text>
      <Text style={styles.title}>เข้าสู่ระบบ</Text>
      <TextInput
        style={styles.input}
        placeholder="อีเมล"
        placeholderTextColor="#fff"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="รหัสผ่าน"
        placeholderTextColor="#fff"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title="เข้าสู่ระบบ"
        color="#FFD700"
        onPress={handleLogin}
      />
      <Text style={styles.link} onPress={() => navigation.navigate('Register')}>สมัครสมาชิก</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: '#FFD700',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#FFD700',
    backgroundColor: '#333',
    color: '#fff',
    marginVertical: 10,
  },
  link: {
    color: '#FFD700',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
});
