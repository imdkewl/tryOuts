import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({pressAction, text}) => {
    return (
       <TouchableOpacity 
       style={styles.buttonStyle} 
       onPress={pressAction}
       >
           <Text style={styles.textStyle}> {text} </Text>
    </TouchableOpacity>
    );
};


const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#EB6345',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#4570EB',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }


}
export default Button;
