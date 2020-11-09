import React, { Component } from 'react';
import { Button, View, Text, Alert } from 'react-native';


export default class App extends Component {

  render() {

    return (

      <View>

        <View style={{marginTop: 10, width: 200, height: 150}}>

          <Button 
            title="sound1"
            color="red"
            onPress={() => Alert.alert('Play Sound')} />
      
        </View>

        <View style={{marginTop: 10, width: 200, height: 150}}>

          <Button 
            title="sound2"
            color="yellow"
            onPress={() => Alert.alert('Play Sound')} />
      
        </View>

        <View style={{marginTop: 10, width: 200, height: 150}}>

          <Button 
            title="sound3"
            color="blue"
            onPress={() => Alert.alert('Play Sound')} />
      
        </View>

        <View style={{marginTop: 10, width: 200, height: 150}}>

          <Button 
            title="sound4"
            color="green"
            onPress={() => Alert.alert('Play Sound')} />
      
        </View>

        <View style={{marginTop: 10, width: 200, height: 150}}>

          <Button 
            title="sound5"
            color="orange"
            onPress={() => Alert.alert('Play Sound')} />
      
        </View>

      </View>

    );

  }

}