import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';


const bookings = [
  { id: '1', roomTitle: 'ห้อง A', date: '2024-10-15', status: 'จองแล้ว' },
];

const BookingList = ({ navigation }) => {
  const [data, setData] = useState(bookings);

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.row} 
      onPress={() => navigation.navigate('RoomDetail', { roomId: item.id })}
    >
      <Text style={styles.title}>{item.roomTitle}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.status}>{item.status}</Text>
    </TouchableOpacity>
  );

  const renderHiddenItem = ({ item }) => (
    <View style={styles.hiddenContainer}>
      <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.id)}>
        <Text style={styles.deleteText}>ลบ</Text>
      </TouchableOpacity>
    </View>
  );

  const handleDelete = (id) => {
    // ฟังก์ชันสำหรับลบการจอง
    const newData = data.filter((booking) => booking.id !== id);
    setData(newData);
  };

  return (
    <View style={styles.container}>
      <SwipeListView
        data={data}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-75} // ความกว้างที่เปิดไว้เมื่อเลื่อน
        disableRightSwipe={true} // ไม่อนุญาตให้เลื่อนจากขวา
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  row: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 20,
    borderRadius: 10, // มุมมน
    marginHorizontal: 10, // ระยะห่างจากขอบ
    marginBottom: 10, // ช่องว่างระหว่างรายการ
    shadowColor: '#000', // เงาของรายการ
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2, // สำหรับ Android
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // สีของชื่อห้อง
  },
  date: {
    fontSize: 14,
    color: '#666', // สีของวันที่
    marginTop: 5, // ระยะห่างจากชื่อห้อง
  },
  status: {
    fontSize: 14,
    color: '#28a745', // สีเขียวสำหรับสถานะจองแล้ว
    marginTop: 5, // ระยะห่างจากวันที่
  },
  hiddenContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff0000',
    justifyContent: 'flex-end',
    paddingRight: 15,
    borderRadius: 10, // มุมมน
    marginHorizontal: 10, // ระยะห่างจากขอบ
    marginBottom: 10, // ช่องว่างระหว่างรายการ
    shadowColor: '#000', // เงาของปุ่มลบ
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2, // สำหรับ Android
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    padding: 10,
    borderRadius: 5,
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

// ส่งออก BookingList
export default BookingList;
