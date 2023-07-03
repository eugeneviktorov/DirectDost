import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, StyleSheet, ScrollView } from "react-native";
import { fetchTeachers } from "../../redux/teachersSlice";
import TeacherBlock from "./TeacherBlock/TeacherBlock";

export default function Teachers() {
  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.teachers).teachers;

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        {teachers[0] &&
          teachers.map((teacher) => {
            return (
              <TeacherBlock
                key={teacher.id}
                title={teacher.fullname}
                telnum={teacher.tel}
                qualification={teacher.qualification}
                experience={teacher.work_experience}
              />
            );
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
