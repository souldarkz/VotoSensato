import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Dignidades extends Component {
    render(){
        return <View style={styles.container}>
            <Text style={{fontSize:20,textAlign:"center",textAlignVertical:"center"}}>DIGNIDADES</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });