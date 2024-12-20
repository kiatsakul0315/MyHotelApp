import React, { useState } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, StyleSheet, Text, Alert } from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (!email || !password || !confirmPassword) {
      window.alert('ข้อมูลไม่ครบถ้วน', 'กรุณากรอกอีเมลและรหัสผ่าน', [{ text: 'ตกลง' }]);
      return;
    }

    if (password !== confirmPassword) {
      window.alert('รหัสผ่านไม่ตรงกัน', 'กรุณาตรวจสอบรหัสผ่านของคุณ', [{ text: 'ตกลง' }]);
      return;
    }

    window.alert('สมัครสมาชิกสำเร็จ', 'คุณสามารถเข้าสู่ระบบได้แล้ว', [{ text: 'ตกลง', onPress: () => {
      navigation.navigate('Login')} }]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>สมัครสมาชิก</Text>
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
      <TextInput
        style={styles.input}
        placeholder="ยืนยันรหัสผ่าน"
        placeholderTextColor="#fff"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {/* ใช้ TouchableOpacity แทน Button */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>สมัครสมาชิก</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>มีบัญชีอยู่แล้ว? เข้าสู่ระบบ</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  link: {
    color: '#FFD700',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
});
