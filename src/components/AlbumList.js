import React, { Component } from 'react';
import { View, Text } from 'react-native';
//lib for http request
import axios from 'axios';


class AlbumList extends Component {
  //initial state for albums array
  state = {
    albums: []
  };
  componentWillMount() {
    //loading json request
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }
renderAlbums() {
  return this.state.albums.map(albums => <Text key={albums.title}>{albums.title}</Text>);
  }
  //this method is called each time the list render
render() {
 return (
   <View>
    {this.renderAlbums()}
    </View>
  );
}
}
export default AlbumList;
