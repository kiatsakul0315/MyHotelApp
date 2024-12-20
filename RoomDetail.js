import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function RoomDetail({ route, navigation }) {
  const { roomId } = route.params || {}; 

  const roomDetails = {
    '1': { title: 'ห้อง A', detail: 'ห้อง B มีเตียงคู่ ห้องน้ำส่วนตัวพร้อมอ่างอาบน้ำ มีพื้นที่นั่งเล่นและบริการชากาแฟ', image: require('./assets/roomA.png') },
    '2': { title: 'ห้อง B', detail: 'ห้อง F เป็นห้องสวีทที่มีสิ่งอำนวยความสะดวกครบครัน มีอ่างจากุซซี่ส่วนตัวและระเบียงส่วนตัว', image: require('./assets/roomB.png') },
    '3': { title: 'ห้อง C', detail: 'ห้อง G มีเตียงนอนขนาดใหญ่ มีพื้นที่นั่งเล่นและระบบเสียงที่ทันสมัย พร้อมด้วยวิวที่น่าตื่นตาตื่นใจ', image: require('./assets/roomC.png') },
    '4': { title: 'ห้อง D', detail: 'ห้อง A มีเตียงคิงไซส์ ห้องน้ำในตัว และวิวทะเลสวยงาม มีบริการ Wi-Fi ฟรี และทีวีจอแบน', image: require('./assets/roomD.png') },
    // เพิ่มห้องพักอื่นๆ ที่ต้องการ
  };

  const room = roomDetails[roomId];

  if (!room) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>ห้องพักไม่พบ</Text>
      </SafeAreaView>
    );
  }

  const handleBooking = () => {
    navigation.navigate('UserDetail', { bookedRoom: room });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={room.image} style={styles.image} />
      <Text style={styles.title}>{room.title}</Text>
      <Text style={styles.detail}>{room.detail}</Text>
      <TouchableOpacity style={styles.bookingButton} onPress={handleBooking}>
        <Text style={styles.buttonText}>จองห้อง</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8', 
    padding: 20, 
  },
  image: {
    width: '100%', 
    height: '70%', 
    borderRadius: 10, 
    marginBottom: 20, 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333', 
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    color: '#666', 
    textAlign: 'center', 
    marginBottom: 20,
  },
  bookingButton: {
    backgroundColor: '#FFD700', 
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 5, 
  },
  buttonText: {
    color: '#000', 
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
