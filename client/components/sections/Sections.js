import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import SubjectBlock from "./SectionBlock/SectionBlock";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllSections } from "../../redux/sectionsSlice";

export default function Sections() {
  const dispatch = useDispatch();

  const sections = useSelector((state) => state.sections);

  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (isFirstLoad) {
      dispatch(fetchAllSections());
    }
    setIsFirstLoad(false);
  }, [sections]);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        {sections.sections[0] &&
          sections.sections.map((section) => {
            return (
              <SubjectBlock
                key={section.id}
                title={section.section_name}
                teacher={section.teacher_name}
                description={section.section_description}
                tel={section.teacher_phone}
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
