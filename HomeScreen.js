import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, Image, View, Modal, FlatList } from 'react-native';
import Swiper from 'react-native-swiper';

export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  
  const roomData = [
    { id: '1', name: 'ห้อง A', detail: '....ห้องเตียงคู่ เหมาะสำหรับการที่เข้าพักทีละ 2-4 คน', image: require('./assets/roomA.png') },
    { id: '2', name: 'ห้อง B', detail: '...ห้องเตียงเดี่ยว เหมาะสำหรับการเข้าพักทีละ 2-3 คน', image: require('./assets/roomB.png') },
    { id: '3', name: 'ห้อง C', detail: 'ห้องเตียงเดี่ยว มีวิวสวย อยู่ชั้น 2 เหมาะเข้าพัก 2-3 คน', image: require('./assets/roomC.png') },
    { id: '4', name: 'ห้อง D', detail: '...ห้องเตียงเดี่ยว เหมาะสำหรับการเข้าพักแบบกลุ่ม ชิวๆ', image: require('./assets/roomD.png') },
  ];

  const renderRoomItem = ({ item }) => (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RoomDetail', { roomId: item.id })}>
      <View style={styles.roomItemContainer}>
        <Image source={item.image} style={styles.roomImage} />
        <View style={styles.roomDetails}>
          <Text style={styles.buttonText}>{item.name}</Text>
          <Text style={styles.roomDetailText}>{item.detail}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleOpenModal} style={styles.dropdownButton}>
        <Text style={styles.dropdownText}>เมนูเพิ่มเติม</Text>
      </TouchableOpacity>
      <Swiper style={styles.wrapper} autoplay={true} autoplayTimeout={2} showsButtons={true}>
        <View style={styles.slide}>
          <Image source={require('./assets/image1.jpg')} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={require('./assets/image2.jpg')} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={require('./assets/image3.jpg')} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={require('./assets/image4.jpg')} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={require('./assets/image5.jpg')} style={styles.image} />
        </View>
      </Swiper>

      <Text style={styles.title}>ยินดีต้อนรับสู่ระบบจองห้องพัก</Text>

      <FlatList
        data={roomData}
        renderItem={renderRoomItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.buttonContainer}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>เมนูเพิ่มเติม</Text>
            <TouchableOpacity style={styles.modalButton} onPress={() => navigation.navigate('ContactUs')}>
              <Text style={styles.modalButtonText}>ติดต่อเรา</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={() => navigation.navigate('FAQ')}>
              <Text style={styles.modalButtonText}>คำถามที่พบบ่อย</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={() => navigation.navigate('Terms')}>
              <Text style={styles.modalButtonText}>เงื่อนไขการใช้งาน</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BookingHistory')}>
              <Text style={styles.modalButtonText}>ประวัติการจอง</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={handleCloseModal}>
              <Text style={styles.modalButtonText}>ปิด</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  wrapper: {
    height: 250,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    color: '#FFD700',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    padding: 10,
  },
  dropdownButton: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  dropdownText: {
    color: '#000',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  roomItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  roomImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  roomDetails: {
    flex: 1,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  roomDetailText: {
    color: '#666',
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#000',
    fontSize: 16,
  },
});
