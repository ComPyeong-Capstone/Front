import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const videoData = [
  {
    id: "1",
    title: "제목1",
    user: "사용자1",
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    title: "제목2",
    user: "사용자2",
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    title: "제목3",
    user: "사용자3",
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: "4",
    title: "제목4",
    user: "사용자4",
    thumbnail: "https://via.placeholder.com/150",
  },
];

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredVideos = videoData.filter(
    (video) =>
      video.title.includes(searchQuery) || video.user.includes(searchQuery)
  );

  return (
    <View style={styles.container}>
      {/* 검색창 */}
      <View style={styles.searchBar}>
        <Ionicons
          name="search"
          size={20}
          color="#1F2C3D"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="검색"
          placeholderTextColor="#1F2C3D"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>

      {/* 검색 결과 */}
      <FlatList
        data={filteredVideos}
        numColumns={2}
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
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#51BCB4",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#1F2C3D",
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
