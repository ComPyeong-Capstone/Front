import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import { useNavigation } from "@react-navigation/native";

export default function PhotoVideoScreen() {
  const navigation = useNavigation();
  const [videoLength, setVideoLength] = useState(30); // 기본값 30초

  return (
    <View style={styles.container}>
      {/* 단계 진행 표시 UI */}
      <View style={styles.progressContainer}>
        <View style={styles.progressCircle} />
        <View style={styles.progressLine} />
        <View style={styles.progressCircle} />
      </View>

      {/* 영상 길이 선택 슬라이더 */}
      <Text style={styles.label}>영상 길이</Text>
      <Slider
        style={styles.slider}
        minimumValue={30}
        maximumValue={60}
        step={5} // 5초 단위 증가
        value={videoLength}
        onValueChange={setVideoLength}
        minimumTrackTintColor="#51BCB4"
        maximumTrackTintColor="#ccc"
        thumbTintColor="#51BCB4"
      />
      <View style={styles.timeLabels}>
        <Text style={styles.timeText}>30초</Text>
        <Text style={styles.timeText}>60초</Text>
      </View>

      {/* 이전 / 다음 버튼 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.prevButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>이전</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate("PhotoCaptionScreen")}
        >
          <Text style={styles.buttonText}>다음</Text>
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
    marginBottom: 30,
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
  label: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 10,
  },
  slider: {
    width: "100%",
    height: 40,
  },
  timeLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  timeText: {
    color: "#fff",
    fontSize: 16,
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
