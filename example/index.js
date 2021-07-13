import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import IconList from './IconList';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <IconList />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
