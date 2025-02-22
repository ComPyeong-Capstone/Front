import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AddScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* 헤더 영역: 좌측 뒤로가기 버튼 */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>뒤로</Text>
        </TouchableOpacity>
      </View>

      {/* 중앙 버튼 영역 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>쇼츠용 영상</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>내사진 영상</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F2C3D",
  },
  header: {
    padding: 15,
    // 좌측 정렬을 위해 flexDirection 사용
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    // 버튼 터치 영역을 넓게 하려면 패딩 추가 가능
    padding: 5,
  },
  backText: {
    color: "#fff",
    fontSize: 18,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#51BCB4",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#1F2C3D",
    fontWeight: "bold",
  },
});
