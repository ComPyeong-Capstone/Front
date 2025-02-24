import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function VideoPostScreen() {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");

  const handlePost = () => {
    if (!title.trim()) {
      Alert.alert("게시 실패", "제목을 입력해주세요.");
      return;
    }
    navigation.navigate("Main", {
      screen: "Home",
      params: { newPost: { title, tags } },
    });
  };

  return (
    <View style={styles.container}>
      {/* 제목 입력 */}
      <TextInput
        style={styles.titleInput}
        placeholder="제목을 입력하세요"
        placeholderTextColor="#51BCB4"
        value={title}
        onChangeText={setTitle}
      />

      {/* 최종 결과물 */}
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>최종결과물</Text>
      </View>

      {/* 태그 입력 */}
      <TextInput
        style={styles.tagInput}
        placeholder="태그 텍스트\n(Ex. #캡스톤, #컴평)"
        placeholderTextColor="#51BCB4"
        value={tags}
        onChangeText={setTags}
        multiline
      />

      {/* 버튼 컨테이너 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.exitButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>나가기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.postButton} onPress={handlePost}>
          <Text style={styles.buttonText}>게시</Text>
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
  titleInput: {
    width: "90%",
    height: 50,
    borderWidth: 1,
    borderColor: "#51BCB4",
    borderRadius: 10,
    paddingHorizontal: 10,
    color: "#fff",
    marginBottom: 20,
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
  tagInput: {
    width: "90%",
    height: 80,
    borderWidth: 1,
    borderColor: "#51BCB4",
    borderRadius: 10,
    paddingHorizontal: 10,
    color: "#fff",
    marginBottom: 20,
    textAlignVertical: "top",
  },
  buttonContainer: {
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
  postButton: {
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
