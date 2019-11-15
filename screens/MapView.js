/* eslint-disable no-use-before-define */
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import storage from '../store/memStore'



export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      initialRegion: {
        latitude: 41.8900,
        longitude: -87.6500,
        latitudeDelta: 0.1900,
        longitudeDelta: 0.0421,
      },
      active: {
        latitude: 41.9351802,
        longitude: -87.6465491,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      storage: storage
    }
  }

  componentDidMount() {
    console.log(this.state.storage[1])
    console.log(this.state.active)
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
      initialRegion={this.state.initialRegion}
      style={styles.mapStyle}>

        {this.state.storage.map(mark => {
          return (
          <Marker
          key={mark.id}
          title={mark.name}
          coordinate={mark.latlng}
          />
          )
        })}

      </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
