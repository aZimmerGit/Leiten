/* eslint-disable no-use-before-define */
import React from 'react';
import {connect} from 'react-redux'
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Header } from 'native-base';

class MapScreen extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    console.log('Map Screen Mounted')
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <MapView
      initialRegion={this.props.region}
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
    region: state.region
  }
}

export default connect(mapStateToProps)(MapScreen)
