/* eslint-disable no-use-before-define */
import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {connect} from 'react-redux'
import { Card, Body, CardItem, Text, Button, Header, Left, Title, Icon } from 'native-base';
import {fetchAllPlaces} from '../store/placesReducer'

class HomeScreen extends React.Component {
  constructor() {
    super()
    this.retPlaces = this.retPlaces.bind(this)
  }

  componentDidMount(){
  }

  retPlaces(){
    this.props.getAllPlaces()
  }

  render() {
  return (
    <View style={styles.container}>
      <Header>
      <Left>
            <Button transparent>
              <Icon name='sort' type='MaterialIcons'/>
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
      </Header>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {this.props.places.map(place => {
          return (
            <Card key={place.id}>
              <CardItem header bordered button onPress={() => alert(`${place.phone}`)}>
                <Text>{place.name}</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>{place.streetAddress}</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>{place.description}</Text>
                </Body>
              </CardItem>
            </Card>
          );
        })}
        <Card>
          <CardItem>
            <Button onPress={()=>this.retPlaces()}>
              <Text>FSData</Text>
            </Button>
          </CardItem>
        </Card>
      </ScrollView>
    </View>
  );
      }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

const mapStateToProps = state => {
  return {
    places: state.places,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllPlaces: () => dispatch(fetchAllPlaces())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
