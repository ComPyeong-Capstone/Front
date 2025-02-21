import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";

export default function ProfileScreen() {
  // 게시물 데이터 예시 (이미지 URL)
  const posts = [];

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        {/* 원형 칸 */}
        <View style={styles.profileImage}></View>

        <View style={styles.userInfo}>
          <Text style={styles.userName}>xinnun</Text>
          <Text style={styles.userDescription}>Developer</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>120</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
          </View>
        </View>
      </View>

      {/* 게시물 그리드 */}
      <FlatList
        data={posts}
        numColumns={3}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Image source={{ uri: item.image }} style={styles.postImage} />
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
    backgroundColor: "#1F2C3D", // 전체 배경색을 #1F2C3D로 설정
  },
  profileHeader: {
    flexDirection: "row",
    padding: 45,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  profileImage: {
    width: 80, // 원의 크기 (작게 설정)
    height: 80, // 원의 크기 (작게 설정)
    borderRadius: 40, // 동그라미로 만들기 위한 반지름 (width와 height의 절반)
    backgroundColor: "#ddd", // 배경색
    marginRight: 20, // 원과 텍스트 사이의 간격을 20으로 설정
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff", // 텍스트 색상을 흰색으로 변경
  },
  userDescription: {
    fontSize: 14,
    color: "#ccc", // 텍스트 색상을 밝은 회색으로 변경
    marginVertical: 5,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff", // 텍스트 색상을 흰색으로 변경
  },
  statLabel: {
    fontSize: 12,
    color: "#ccc", // 텍스트 색상
  },
});
