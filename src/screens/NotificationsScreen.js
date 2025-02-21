import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const notifications = [
  { id: "1", message: "🔔 your post" },
  { id: "2", message: "🔔🔔🔔🔔" },
];

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={({ item }) => (
          <View style={styles.notificationCard}>
            <Text style={styles.notificationText}>{item.message}</Text>
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
    backgroundColor: "#1F2C3D",
    padding: 10,
  },
  notificationCard: {
    backgroundColor: "#51BCB4",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  notificationText: {
    fontSize: 16,
    color: "#333",
  },
});
