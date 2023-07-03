import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert, Linking } from 'react-native';

export default function MenuBlock({navigation}) {

  return (
    <ScrollView contentContainerStyle>
      <TouchableOpacity style={stylesblock.square} onPress={()=>navigation.navigate("Предметы")} activeOpacity={1}>
        <Text style={stylesblock.text}>Предметы</Text>
      </TouchableOpacity>
      <TouchableOpacity style={stylesblock.square} onPress={()=>navigation.navigate("Преподаватели")} activeOpacity={1}>
        <Text style={stylesblock.text}>Преподаватели</Text>
      </TouchableOpacity>
      <TouchableOpacity style={stylesblock.square} onPress={()=>navigation.navigate("Все секции")} activeOpacity={1}>
        <Text style={stylesblock.text}>Все секции</Text>
      </TouchableOpacity>
      <TouchableOpacity style={stylesblock.square} onPress={()=>navigation.navigate("Мои секции")} activeOpacity={1}>
        <Text style={stylesblock.text}>Мои секции</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const stylesblock = StyleSheet.create({
  square: {
    width: '90%',
    aspectRatio: 4,
    backgroundColor: '#17B0FE',
    justifyContent: 'center',
    borderRadius: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 15,
    marginTop: 15,
  },  
  text: {
    fontSize: 28,
    textAlign: 'center',
    color: '#fff',
  },
});