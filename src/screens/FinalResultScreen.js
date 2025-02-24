import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as FileSystem from "expo-file-system";

export default function FinalResultScreen() {
  const navigation = useNavigation();

  const handleSave = async () => {
    try {
      const fileUri = FileSystem.documentDirectory + "final_result.mp4";
      await FileSystem.writeAsStringAsync(fileUri, "video_data_placeholder", {
        encoding: FileSystem.EncodingType.UTF8,
      });
      Alert.alert("저장 완료", "동영상이 로컬에 저장되었습니다.");
    } catch (error) {
      Alert.alert("저장 실패", "오류가 발생했습니다. 다시 시도해주세요.");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* 최종 결과물 표시 */}
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>최종결과물</Text>
      </View>

      {/* 버튼 영역 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.postButton}
          onPress={() => navigation.navigate("VideoPostScreen")}
        >
          <Text style={styles.buttonText}>포스팅</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.secondaryButtonContainer}>
        <TouchableOpacity
          style={styles.exitButton}
          onPress={() => navigation.navigate("Main")}
        >
          <Text style={styles.buttonText}>나가기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.buttonText}>저장</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F2C3D",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  resultContainer: {
    width: 250,
    height: 400,
    borderWidth: 1,
    borderColor: "#51BCB4",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  resultText: {
    color: "#51BCB4",
    fontSize: 18,
  },
  buttonContainer: {
    width: "90%",
    alignItems: "center",
    marginBottom: 10,
  },
  postButton: {
    backgroundColor: "#51BCB4",
    width: "100%",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 20,
  },
  secondaryButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  exitButton: {
    backgroundColor: "#ccc",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  saveButton: {
    backgroundColor: "#51BCB4",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1F2C3D",
  },
});
