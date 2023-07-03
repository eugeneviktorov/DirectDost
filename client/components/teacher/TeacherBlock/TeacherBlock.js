import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const TeacherBlock = ({
  title,
  telnum,
  qualification,
  experience,
}) => {
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
          <Text style={styles.detailsText}>Тел: <Text style={styles.weight}>{telnum}</Text></Text>
          <Text style={styles.detailsText}>Квалификация: <Text style={styles.weight}>{qualification}</Text></Text>
          <Text style={styles.detailsText}>Стаж: <Text style={styles.weight}>{experience}</Text></Text>
        </View>
      )}
    </View>
  );
};

export default TeacherBlock;

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
