import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import SubjectBlock from './SubjectBlock/SubjectBlock';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubjects } from '../../redux/subjectsSlice';

export default function App() {
  const dispatch = useDispatch();
  const subjects = useSelector(state=>state.subjects).subjects;
  const userInfo = useSelector(state=>state.userInfo).userInfo;
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(()=>{
    if(isFirstLoad) {
      dispatch(fetchSubjects({group_id: userInfo.group_id, userId: userInfo.id}))
    }
    setIsFirstLoad(false)
  }, [subjects])

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        {subjects[0] && subjects.map((subject)=> {
          return <SubjectBlock key={subject.id} title={subject.subject_name} teacher={subject.teacher_name} hours={subject.hours_count} grades={subject.grade}/>
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
