import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

  containerDisplay: {
    flex: 2,
    backgroundColor: '#90CAF9',
    justifyContent: 'center',
  },


  textDisplay : {
    fontSize: 20,
    color: '#FFF',
    alignSelf : 'flex-end',
    padding: 5,
    fontWeight: 'bold'
  },

  containerInput: {
    flex: 10,
    backgroundColor: '#CEF6F5'
  },

  inputRow: {
    flex: 1,
    flexDirection: 'row'
  },

  inputC: {
    flex: 1,
    flexDirection: 'row',
    borderColor : "white",
    borderWidth : 2,
    alignItems: 'center',

  },

  inputButton: {
    flex : 1,
    borderColor : "white",
    borderWidth : 2,
    justifyContent: 'center',
    alignItems: 'center'
  },

  inputText : {
    fontSize: 30,
    color: '#0B0B61',
  }

});

export default styles;
