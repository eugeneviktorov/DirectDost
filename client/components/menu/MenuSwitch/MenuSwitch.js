import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import Swiper from 'react-native-swiper';

const MenuBlock = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={stylesblock.square} onPress={onPress} activeOpacity={1}>
      <Text style={stylesblock.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  const handlePressLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <Swiper style={stylesblock.wrapper} initialPage={0} loop={false} showsPagination={true}>
      <View style={stylesblock.row}>
        <MenuBlock title="Расписание" onPress={() => handlePressLink('https://eservice.omsu.ru/schedule/#/')}/>
        <MenuBlock title="Реквизиты" onPress={() => handlePressLink('https://omsu.ru/about/omsu_details/')}/>
      </View>

      <View style={stylesblock.row}>
        <MenuBlock title="Оплата" onPress={() => handlePressLink('https://omsu.ru/geninfo/pay/')}/>
        <MenuBlock title="Sberpay" onPress={() => handlePressLink('https://omsu.ru/geninfo/pay/sbol/')}/>
      </View>

      <View style={stylesblock.row}>
        <MenuBlock title="Контакты" onPress={() => handlePressLink('https://omsu.ru/about/phones/')}/>
        <MenuBlock title="Эл. Сервисы" onPress={() => handlePressLink('https://eservice.omsu.ru/')}/>
      </View>

      <View style={stylesblock.row}>
        <MenuBlock title="Стипендии" onPress={() => handlePressLink('https://omsu.ru/sveden/grants/')}/>
        <MenuBlock title="Трудоустройство" onPress={() => handlePressLink('https://omsu.ru/about/structure/general/ovr/ost/pedsfera/index.php')}/>
      </View>

      <View style={stylesblock.row}>
        <MenuBlock title="Бланки заявлений" onPress={() => handlePressLink('https://omsu.ru/about/structure/general/okst/blanki.php')}/>
        <MenuBlock title="Инфраструктура" onPress={() => handlePressLink('https://omsu.ru/employees/infrastructure/')}/>
      </View>
    </Swiper>
  );
}

const stylesblock = StyleSheet.create({
  wrapper:{
    height: 130,
    backgroundColor: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  square: {
    width: '45%',
    aspectRatio: 2,
    backgroundColor: '#17B0FE',
    justifyContent: 'center',
    borderRadius: 25,
    shadowColor: '#000',
    
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
  },
});