import React from 'react'
import {Text, View} from 'react-native'

//make a component
const Header = () => {
    const { viewStyle,textStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Tech Stack</Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height : 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width:0, height:2 },
        shadowOpacity: 0.2,
        elevation: 5,
        position: 'relative'
    },
    textStyle: { 
        fontSize: 20,
    }
}

export  { Header }