import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const faqs = [
  { question: 'คำถามที่ 1', answer: 'คำตอบของคำถามที่ 1' },
  { question: 'คำถามที่ 2', answer: 'คำตอบของคำถามที่ 2' },
  { question: 'คำถามที่ 3', answer: 'คำตอบของคำถามที่ 3' },
];

export default function FAQScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>คำถามที่พบบ่อย</Text>
      {faqs.map((faq, index) => (
        <View key={index} style={styles.faq}>
          <Text style={styles.question}>{faq.question}</Text>
          <Text>{faq.answer}</Text>
        </View>
      ))}
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
  faq: {
    marginBottom: 15,
  },
  question: {
    fontWeight: 'bold',
    color: '#FFD700',
  },
});
