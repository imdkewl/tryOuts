

import React from 'react';
import { Text, View, AppRegistry, StyleSheet } from 'react-native';


const Header = (props) => {
    return (
        <View style={ styles.viewStyle}>
        <Text style = { styles.textStyle}> { props.headerText } </Text>
        </View>
    );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#E4ECAF',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#0C0C0B',
    shadowOffset: {width: 0,height: 3},
    shadowOpacity: 0.4
  },
  textStyle: {
    fontSize: 20

  },

});

//make the component available to other parts of the app
export {Header};


