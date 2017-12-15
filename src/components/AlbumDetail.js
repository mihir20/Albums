import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

const AlbumDetail = ({ album }) => {
   //
  //destructuring objects
const { title, artist, thumbnail_image, image, url } = album;
const { infoTextStyle, infoFont, thumbnailStyle, thumbnailContainerStyle, imageStyle } = styles;


 return (<Card >

     <CardItem>
     <View style={thumbnailContainerStyle}>
<Image
style={thumbnailStyle}
source={{ uri: thumbnail_image }}
/>
     </View>
     <View style={infoTextStyle}>
      <Text style={infoFont} >
       {title}
      </Text>
      <Text>
       {artist}
      </Text>
      </View>
     </CardItem>

     <CardItem>
     <Image
      style={imageStyle}
      source={{ uri: image }}
     />
     </CardItem>

     <CardItem>
       <Button
onPress={() => Linking.openURL(url)} //Linking is lib used to open url
       >
       Buy Now
       </Button>
     </CardItem>

    </Card>
  );
};

  const styles = {
    infoTextStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    infoFont: {
      fontSize: 18
    },
    thumbnailStyle: {
      height: 50,
      width: 50,
      borderRadius: 45
    },
    thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10,
    },
    imageStyle: {
      height: 300,
      flex: 1,
      width: null
    }
  };
 export default AlbumDetail;
