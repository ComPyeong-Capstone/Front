import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

export default function PhotoCaptionScreen() {
  const navigation = useNavigation();
  const [images, setImages] = useState([]);
  const [captions, setCaptions] = useState({});
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
    });
    if (!result.canceled) {
      setImages([...images, ...result.assets.map((asset) => asset.uri)]);
    }
  };

  const handleCaptionChange = (text) => {
    setCaptions({ ...captions, [selectedImageIndex]: text });
  };

  return (
    <View style={styles.container}>
      {/* 단계 진행 표시 UI */}
      <View style={styles.progressContainer}>
        <View style={styles.progressCircle} />
        <View style={styles.progressLine} />
        <View style={styles.progressCircleFilled} />
        <View style={styles.progressLine} />
        <View style={styles.progressCircle} />
      </View>

      {/* 사진 선택 및 추가 */}
      <FlatList
        horizontal
        data={images}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => setSelectedImageIndex(index)}>
            <Image
              source={{ uri: item }}
              style={[
                styles.image,
                selectedImageIndex === index && styles.selectedImage,
              ]}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity style={styles.addButton} onPress={pickImage}>
        <Text style={styles.buttonText}>사진 추가</Text>
      </TouchableOpacity>

      {/* 자막 입력 */}
      <TextInput
        style={styles.captionInput}
        placeholder="자막 입력"
        placeholderTextColor="#51BCB4"
        value={captions[selectedImageIndex] || ""}
        onChangeText={handleCaptionChange}
      />

      {/* 버튼 컨테이너 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.prevButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>이전</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.nextButton,
            { backgroundColor: images.length > 0 ? "#51BCB4" : "#aaa" },
          ]}
          onPress={() =>
            navigation.navigate("VideoGenerationScreen", { images, captions })
          }
          disabled={images.length === 0}
        >
          <Text style={styles.buttonText}>영상 생성</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F2C3D",
    padding: 20,
    justifyContent: "center",
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  progressCircleFilled: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: "#51BCB4",
  },
  progressCircle: {
    width: 15,
    height: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#51BCB4",
    backgroundColor: "transparent",
  },
  progressLine: {
    width: 50,
    height: 2,
    backgroundColor: "#51BCB4",
    marginHorizontal: 5,
  },
  image: {
    width: 80,
    height: 80,
    margin: 5,
    borderRadius: 10,
  },
  selectedImage: {
    borderWidth: 2,
    borderColor: "#51BCB4",
  },
  addButton: {
    backgroundColor: "#51BCB4",
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  captionInput: {
    height: 50,
    borderColor: "#51BCB4",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: "#fff",
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  prevButton: {
    backgroundColor: "#ccc",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  nextButton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1F2C3D",
  },
});
