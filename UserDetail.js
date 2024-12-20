import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function UserDetail({ route }) {
  const { bookedRoom } = route.params;
  const [selectedImage, setSelectedImage] = useState(null);
  const [confirmationVisible, setConfirmationVisible] = useState(false);

  const handleImagePick = async () => {
    // ขอสิทธิ์ในการเข้าถึงภาพ
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    // เลือกรูปภาพจากอุปกรณ์
    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const handleConfirmBooking = () => {
    setConfirmationVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>รายละเอียดการจอง</Text>
      <Text style={styles.detail}>ห้อง: {bookedRoom.title}</Text>
      <Text style={styles.detail}>รายละเอียด: {bookedRoom.detail}</Text>
      <Text style={styles.detail}>ราคาค่าห้องต่อวัน : 1500 </Text>
      <Image source={require('./assets/TT.jpg')} style={styles.image} />
      <Text style={styles.detail}>ธนาคาร กรุงเทพ : 316-4-814471 </Text>
      <TouchableOpacity style={styles.button} onPress={handleImagePick}>
        <Text style={styles.buttonText}>แนบรูปภาพ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleConfirmBooking}>
        <Text style={styles.buttonText}>ยืนยันการจอง</Text>
      </TouchableOpacity>

      {/* แสดงรูปภาพที่แนบ */}
      {selectedImage && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: selectedImage }} style={styles.image} />
        </View>
      )}

      {/* แสดงข้อความยืนยันการจอง */}
      {confirmationVisible && (
        <Text style={styles.confirmationText}>การจองของคุณได้รับการยืนยันแล้ว!</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  detail: {
    fontSize: 16,
    marginVertical: 10,
    color: '#fff',
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageContainer: {
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#FFD700',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  confirmationText: {
    marginTop: 20,
    fontSize: 18,
    color: '#FFD700',
    textAlign: 'center',
  },
});
