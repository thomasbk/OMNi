import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Platform, } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
import {Image} from 'react-native' ; 

export default class App extends React.Component {
  state = {
    showCamera: true,
    showImage: false,
    hasPermission: null,
    cameraType: Camera.Constants.Type.front,
    imageuri: "",
  }

  async componentDidMount() {
    this.getPermissionAsync()
  }

  getPermissionAsync = async () => {
    // Camera roll Permission 
    //if (Platform.OS === 'ios') {
    //  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    //  if (status !== 'granted') {
    //    alert('Sorry, we need camera roll permissions to make this work!');
    //  }
    //} 
    // Camera Permission
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasPermission: status === 'granted' });
  }

  handleCameraType=()=>{
    const { cameraType } = this.state

    this.setState({cameraType:
      cameraType === Camera.Constants.Type.back
      ? Camera.Constants.Type.front
      : Camera.Constants.Type.back
    })
  }

  takePicture = async () => {
    if (this.camera) {
      this.setState({ showCamera: false });
      this.setState({ showImage: true });
      //this.photo = await this.camera.takePictureAsync();
      let photo = await this.camera.takePictureAsync();
      if (photo) {
        this.setState({ imageuri: photo.uri });
      }

    }
  }

  //pickImage = async () => {
  //  let result = await ImagePicker.launchImageLibraryAsync({
  //    mediaTypes: ImagePicker.MediaTypeOptions.Images
  //  });
  //}
  

  render(){
    const { hasPermission } = this.state
    if (hasPermission === null) {
      return <View />;
    } else if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
          <View style={{ flex: 1 }}>
            {this.state.showCamera ? (
            <Camera style={{ flex: 1 }} type={this.state.cameraType}  ref={ref => {this.camera = ref}}>
              <View style={{flex:1,  justifyContent:"space-between"}}>
                
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    bottom:0,
                    alignSelf: 'center',
                    marginBottom: 40,
                    //alignItems: 'center',
                    backgroundColor: 'transparent',
                  }}
                  onPress={()=>this.takePicture()}
                  >
                  <FontAwesome
                      name="camera"
                      style={{ color: "#fff", fontSize: 40}}
                  />
                </TouchableOpacity>
                
              </View>
            </Camera>
            ) : null}
            {this.state.showImage ? (
              <Image
              source={this.state.imageuri ? {uri: this.state.imageuri} : null}
              resizeMode="contain"
              style={{
                width: 300,
                height: 500,
                marginTop: 40,
                alignSelf: "center"
              }}
            ></Image>
              
            ) : null}
        </View>
      );
    }
  }
  
}