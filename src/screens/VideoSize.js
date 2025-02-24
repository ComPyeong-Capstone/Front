import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { useNavigation } from "@react-navigation/native";

const VideoSettingsScreen = () => {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(1);
  const [videoLength, setVideoLength] = useState(30);

  return (
    <View style={styles.container}>
      {/* Progress Indicator - 상단 배치 */}
      <View style={styles.progressContainer}>
        {[1, 2, 3, 4].map((step) => (
          <View key={step} style={[
            styles.progressDot,
            { backgroundColor: step <= progress ? "black" : "#ccc" }
          ]} />
        ))}
      </View>

      {/* 내용 컨테이너 (슬라이더와 텍스트) */}
      <View style={styles.contentContainer}>
        <Text style={styles.label}>영상 길이</Text>
        <Slider
          style={styles.slider}
          minimumValue={30}
          maximumValue={60}
          step={1}
          value={videoLength}
          onValueChange={setVideoLength}
          minimumTrackTintColor="black"
          maximumTrackTintColor="gray"
          thumbTintColor="#FFFFf"
        />
        <View style={styles.sliderLabels}>
          <Text style={styles.sliderLabelText}>30초</Text>
          <Text style={styles.sliderLabelText}>60초</Text>
        </View>
      </View>

      {/* Next Button - 하단 고정 */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("NextScreen")}
      >
        <Text style={styles.nextButtonText}>다음</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#1F2C3D",
    padding: 0,
    paddingTop: 0,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "50%",
    position: "absolute",
    top: 30,
  },
  progressDot: {
    width: 12,
    height: 12,
    borderRadius: 10,
  },
  contentContainer: {
    flex: 1, // 컨텐츠를 화면 중앙에 위치하게 함
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  label: {
    color: "white",
    fontSize: 25,
    marginBottom: 10,
  },
  slider: {
    width: "80%",
    height: 30,
  },
  sliderLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 30,
  },
  sliderLabelText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  nextButton: {
    position: "absolute",
    bottom: 30, // 하단에서 30px 떨어진 위치
    width: "80%",
    padding: 12,
    backgroundColor: "#51BCB4",
    borderRadius: 10,
    alignItems: "center",
  },
  nextButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default VideoSettingsScreen;
