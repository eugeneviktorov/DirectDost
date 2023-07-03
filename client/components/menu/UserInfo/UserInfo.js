import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert, Linking } from 'react-native';
import { useSelector } from 'react-redux';

const SubjectBlock = ({title, adress, number, group, dateOfBirthday}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <View style={styles.subjectBlock}>
      <TouchableOpacity onPress={() => setShowDetails(!showDetails)} activeOpacity={1}>
        <Text style={styles.subjectTitle}>{title}</Text>
      </TouchableOpacity>
      {showDetails && (
        <View style={styles.details}>
          <Text style={styles.detailsText}>Дата рождения: <Text style={styles.weight}>{dateOfBirthday}</Text></Text>
          <Text style={styles.detailsText}>Тел: <Text style={styles.weight}>{number}</Text></Text>
          <Text style={styles.detailsText}>Адрес: <Text style={styles.weight}>{adress}</Text></Text>
          <Text style={styles.detailsText}>Группа: <Text style={styles.weight}>{group}</Text></Text>
        </View>
      )}
    </View>
  );
};

export default function App() {
  const userInfo = useSelector(state => state.userInfo).userInfo;
  
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.text}>{userInfo.full_name}</Text>
        <SubjectBlock title="Доп. информация" dateOfBirthday={userInfo.date_of_birthday} adress={userInfo.adress} number={userInfo.tel} group={userInfo.group_name}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  subjectBlock: {
    backgroundColor: '#17B0FE',
    borderRadius: 25,
    padding: 16,
    marginBottom: 16,
  },
  subjectTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  details: {
    marginTop: 10,
  },
  detailsText: {
    fontSize: 18,
    color: '#061D47',
    marginTop: 5,
    fontWeight: 'bold',
  },
  weight: {
    fontWeight: 'normal',
  },
  text: {
    fontSize: 32,
    padding: 10,
    marginTop: 30,
    color: '#162A4C',
  },
});