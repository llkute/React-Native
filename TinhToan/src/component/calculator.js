import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import styles from "./styles"
const inputButtons = [
  ['7','8','9','/'],
  ['4','5','6','*'],
  ['3','2','1','-'],
  ['0','.','=','+']
];

export default class TinhToan extends Component {
  constructor(props) {
    super(props);

    this.state ={
      currentinput : '',
      preinput : '0',
      operator : null
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.containerDisplay}>
          <Text style={styles.textDisplay}>
            {this.state.currentinput}
          </Text>
        </View>

        <View style={styles.containerInput}>
          <TouchableHighlight underlayColor={'#04B4AE'} style={styles.inputC}
            onPress = {this._onPress.bind(this,"C")} >
            <Text style={styles.inputText}>C</Text>
          </TouchableHighlight>
          {this._renderButton()}
        </View>
      </View>
    );
  }

  _saveOperator(value){
    this.setState({
      operator : value,
      preinput : this.state.currentinput,
      currentinput : ''
    })
  }

  _saveResults(){
    let preinput = this.state.preinput;
    let current= this.state.currentinput;
    let operator = this.state.operator;
    let results = eval(preinput+ operator+ current);
    this.setState({currentinput: results});
  }

  _saveNumber(value){
    this.setState({
      currentinput: this.state.currentinput + value
    });
  }

  _pressC(value){
    this.setState({
      preinput : value,
      currentinput: value,
      operator: value
    });
  }

  _onPress(value){
    switch (value) {
      case '+':
      case '-':
      case '*':
      case '/':
        this._saveOperator(value);
        break;
      case "=":
        this._saveResults(value);
        break;
      case "C":
        value ="";
        this._pressC(value);
        break;
      default:
        this._saveNumber(value);
        break;

    }
  }
  _renderButton(){
    let view =[];
    let countRow= inputButtons.length;
    for(let i=0; i<countRow; i++){
      let input =[];
      let column = inputButtons[i];
      for(let j=0;j<column.length; j++){
        input.push(
          <TouchableHighlight underlayColor={'#04B4AE'} style={styles.inputButton}
            onPress={this._onPress.bind(this,column[j])} key={'row ' +i +' - '+'column '+ j}>
            <Text style={styles.inputText}>{column[j]}</Text>
          </TouchableHighlight>
        );
      }

      view.push(
        <View key={'row '+i} style={styles.inputRow}>{input}</View>
      );
    }
    return view;
  }
}
