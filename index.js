import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


const app = () => (
  <View style={{ flex: 1, marginBottom: 10 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
    </View>
);

AppRegistry.registerComponent('Albums', () => app);
