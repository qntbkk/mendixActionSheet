import React, { Component, createElement } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ActionSheet from 'react-native-actionsheet';
//import { Constants } from 'expo';

export class Demo extends React.Component {

  showActionSheet = () => {
    this.ActionSheet.show();
  }
  render() {
    return (
      <View style ={{alignItems:'center', justifyContent:'center'}}>
        <Text style={{paddingTop:100}} onPress={this.showActionSheet}>Open ActionSheet</Text>
        <ActionSheet 
          ref={o => this.ActionSheet = o}
          title={'Which one do you like ?'}
          options={['Apple', 'Banana', 'cancel']}
          cancelButtonIndex={2}
          destructiveButtonIndex={1}
          onPress={(index) => { /* do something */console.log(index) }}
        />
      </View>
    )
  }
}