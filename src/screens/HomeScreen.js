import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const videoData = [
  {
    id: "1",
    title: "제목",
    user: "사용자1",
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    title: "제목",
    user: "사용자2",
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    title: "제목",
    user: "사용자3",
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: "4",
    title: "제목",
    user: "사용자4",
    thumbnail: "https://via.placeholder.com/150",
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>VideoAI</Text>
      <FlatList
        data={videoData}
        numColumns={2} // 두 줄 그리드
        renderItem={({ item }) => (
          <View style={styles.videoCard}>
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.userInfo}>
              <View style={styles.profileCircle} />
              <Text style={styles.username}>{item.user}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F2C3D", // ProfileScreen과 동일한 배경색
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#51BCB4",
    marginBottom: 10,
  },
  videoCard: {
    flex: 1,
    backgroundColor: "#51BCB4",
    margin: 5,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  thumbnail: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1F2C3D",
    marginTop: 5,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  profileCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#ccc",
    marginRight: 5,
  },
  username: {
    fontSize: 14,
    color: "#1F2C3D",
  },
});
