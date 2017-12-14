import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios'


class AlbumList extends Component {
  state(){
    albums: [];
  }
  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
  }

render() {
return (
    <View>
    <Text>hi there</Text>
    </View>
  );
}
}
export default AlbumList;
