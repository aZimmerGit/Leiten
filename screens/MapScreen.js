/* eslint-disable no-use-before-define */
import React from 'react';
import {connect} from 'react-redux'
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';



class MapScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      initialRegion: {
        latitude: 41.8900,
        longitude: -87.6570,
        latitudeDelta: 0.1960,
        longitudeDelta: 0.0421,
      },
    }
  }

  componentDidMount() {
    console.log('Map Screen Mounted')
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
      initialRegion={this.state.initialRegion}
      style={styles.mapStyle}>

        {this.props.places.map(mark => {
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


const mapStateToProps = state => {
  return {
    places: state.places,
    curPlace: state.curPlace,
    // initialRegion: state.initialRegion,
  }
}

export default connect(mapStateToProps)(MapScreen)
