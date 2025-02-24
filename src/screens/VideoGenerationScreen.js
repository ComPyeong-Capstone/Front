import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Video,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function VideoGenerationScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { images, captions } = route.params || { images: [], captions: {} };
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevVideo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* 단계 진행 표시 UI */}
      <View style={styles.progressContainer}>
        <View style={styles.progressCircle} />
        <View style={styles.progressLine} />
        <View style={styles.progressCircle} />
      </View>

      {/* 동영상 미리보기 */}
      <View style={styles.videoContainer}>
        <Text style={styles.videoText}>생성된 동영상</Text>
      </View>

      {/* 좌우 네비게이션 */}
      <View style={styles.navigationContainer}>
        <TouchableOpacity onPress={prevVideo}>
          <Text style={styles.navButton}>{"<"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={nextVideo}>
          <Text style={styles.navButton}>{">"}</Text>
        </TouchableOpacity>
      </View>

      {/* 배경 음악 버튼 */}
      <TouchableOpacity style={styles.audioButton}>
        <Text style={styles.buttonText}>배경 음악</Text>
      </TouchableOpacity>

      {/* 이전 / 영상 병합 버튼 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.prevButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>이전</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate("FinalResultScreen")}
        >
          <Text style={styles.buttonText}>영상 병합</Text>
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
  progressCircle: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: "#51BCB4",
  },
  progressLine: {
    width: 50,
    height: 2,
    backgroundColor: "#51BCB4",
    marginHorizontal: 5,
  },
  videoContainer: {
    height: 300,
    borderWidth: 1,
    borderColor: "#51BCB4",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  videoText: {
    color: "#51BCB4",
    fontSize: 18,
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  navButton: {
    color: "#51BCB4",
    fontSize: 30,
  },
  audioButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#51BCB4",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 10,
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
    backgroundColor: "#51BCB4",
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
