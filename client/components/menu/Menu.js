import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import UserInfo from "./UserInfo/UserInfo";
import MenuBlocks from "./MenuBlocks/MenuBlocks";
import MenuSwitch from "./MenuSwitch/MenuSwitch";
import TextLink from "./MenuSwitch/TextLink/TextLink";


export default function Menu({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <UserInfo />
      <TextLink />
      <MenuSwitch />
      <MenuBlocks navigation={navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
