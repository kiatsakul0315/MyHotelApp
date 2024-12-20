import React from 'react';
import { SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native';

export default function TermsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>เงื่อนไขการใช้งาน</Text>
      <ScrollView>
        <Text style={styles.detail}>1. เงื่อนไขที่ 1 ...</Text>
        <Text style={styles.detail}>2. เงื่อนไขที่ 2 ...</Text>
        <Text style={styles.detail}>3. เงื่อนไขที่ 3 ...</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 20,
  },
  detail: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
});
