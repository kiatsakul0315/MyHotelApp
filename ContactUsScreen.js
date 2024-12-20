import React from 'react';
import { SafeAreaView, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function ContactUsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>ติดต่อเรา</Text>
      <TextInput style={styles.input} placeholder="ชื่อ" placeholderTextColor="#fff" />
      <TextInput style={styles.input} placeholder="อีเมล" placeholderTextColor="#fff" />
      <TextInput style={styles.input} placeholder="ข้อความ" placeholderTextColor="#fff" multiline />
      
      
      <TouchableOpacity style={styles.button} onPress={() => alert('ส่งข้อความเรียบร้อย')}>
        <Text style={styles.buttonText}>ส่งข้อความ</Text>
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
    marginTop: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
