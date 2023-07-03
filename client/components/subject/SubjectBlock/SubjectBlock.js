import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

SubjectBlock = ({ title, teacher, hours, grades }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <View style={styles.subjectBlock}>
      <TouchableOpacity
        onPress={() => setShowDetails(!showDetails)}
        activeOpacity={1}
      >
        <Text style={styles.subjectTitle}>{title}</Text>
      </TouchableOpacity>
      {showDetails && (
        <View style={styles.details}>
          <Text style={styles.detailsText}>Преподаватель: <Text style={styles.weight}>{teacher}</Text></Text>
          <Text style={styles.detailsText}>Кол-во часов: <Text style={styles.weight}>{hours}</Text></Text>
          <Text style={styles.detailsText}>Оценка: <Text style={styles.weight}>{grades.current}/{grades.max}</Text></Text>
        </View>
      )}
    </View>
  );
};

export default SubjectBlock;

const styles = StyleSheet.create({
  subjectBlock: {
    backgroundColor: "#17B0FE",
    borderRadius: 25,
    padding: 16,
    marginBottom: 16,
  },
  subjectTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  details: {
    marginTop: 10,
  },
  detailsText: {
    fontSize: 18,
    color: "#061D47",
    fontWeight: "bold",
  },
  weight: {
    fontWeight: 'normal',
  },
});
