import React, { Component } from "react"
import { View, Text, TextInput } from 'react-native'
import { CheckBox, Button } from 'react-native-elements'

export default class Screen4 extends Component {
  constructor() {
    super()
    this.state = {
      result: 0,
      input1: '',
      input2: '',
      input3: '',
      checked: true
    }
  }

  handleChange = key => val => {
    this.setState({ [key]: val })
  }

  plus() {
    const { input1, input2, input3 } = this.state
    if (input1 == '' && input2 == '' && input3 == '') {
      alert("Pilih Operator")
    } else if (input1 !== '' && input2 !== '' && input3 !== '') {
      this.setState({
        result: Number(input1) + Number(input2) + Number(input3)
      })
    } else if (input1 !== '' && input2 !== '') {
      this.setState({
        result: Number(input1) + Number(input2)
      })
    } else if (input2 !== '' && input3 !== '') {
      this.setState({
        result: Number(input2) + Number(input3)
      })
    } else if (input1 !== '' && input3 !== '') {
      this.setState({
        result: Number(input1) + Number(input3)
      })
    } else if (input1 == '' || input2 == '' || input3 == '') {
      alert('Penjumlahan tidak dapat dilakukan, pastikan terdapat 2 inputan')
      this.setState({
        result: 0
      })
    }
  }

  minus() {
    const { input1, input2, input3 } = this.state
    if (input1 == '' && input2 == '' && input3 == '') {
      alert("Pilih Operator")
    } else if (input1 !== '' && input2 !== '' && input3 !== '') {
      this.setState({
        result: input1 - input2 - input3
      })
    } else if (input1 !== '' && input2 !== '') {
      this.setState({
        result: input1 - input2
      })
    } else if (input2 !== '' && input3 !== '') {
      this.setState({
        result: input2 - input3
      })
    } else if (input1 !== '' && input3 !== '') {
      this.setState({
        result: input1 - input3
      })
    } else if (input1 == '' || input2 == '' || input3 == '') {
      alert('Pengurangan tidak dapat dilakukan, pastikan terdapat 2 inputan')
      this.setState({
        result: 0
      })
    }
  }

  time() {
    const { input1, input2, input3 } = this.state
    if (input1 == '' && input2 == '' && input3 == '') {
      alert("Pilih Operator")
    } else if (input1 !== '' && input2 !== '' && input3 !== '') {
      this.setState({
        result: input1 * input2 * input3
      })
    } else if (input1 !== '' && input2 !== '') {
      this.setState({
        result: input1 * input2
      })
    } else if (input2 !== '' && input3 !== '') {
      this.setState({
        result: input2 * input3
      })
    } else if (input1 !== '' && input3 !== '') {
      this.setState({
        result: input1 * input3
      })
    } else if (input1 == '' || input2 == '' || input3 == '') {
      alert('Perkalian tidak dapat dilakukan, pastikan terdapat 2 inputan')
      this.setState({
        result: 0
      })
    }
  }

  divide() {
    const { input1, input2, input3 } = this.state
    if (input1 == '' && input2 == '' && input3 == '') {
      alert("Pilih Operator")
    } else if (input1 !== '' && input2 !== '' && input3 !== '') {
      this.setState({
        result: input1 / input2 / input3
      })
    } else if (input1 !== '' && input2 !== '') {
      this.setState({
        result: input1 / input2
      })
    } else if (input2 !== '' && input3 !== '') {
      this.setState({
        result: input2 / input3
      })
    } else if (input1 !== '' && input3 !== '') {
      this.setState({
        result: input1 / input3
      })
    } else if (input1 == '' || input2 == '' || input3 == '') {
      alert('Pembagian tidak dapat dilakukan, pastikan terdapat 2 inputan')
      this.setState({
        result: 0
      })
    }
  }

  render() {
    return (
      <View>
        <View style={{ alignItems: 'center', height: 450 }}>
          <Text style={{ fontSize: 32, fontWeight: 'bold', marginTop: 50 }}>Kalkulator Sederhana</Text>
          <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: '5%' }}>
            <TextInput
              keyboardType={'numeric'}
              value={this.state.input1}
              onChangeText={this.handleChange('input1')}
              style={{
                marginBottom: 15,
                height: 45,
                borderWidth: 1,
                borderColor: '#aaa',
                width: '70%',
                borderRadius: 5,
                paddingLeft: 10
              }}
              placeholder="0"
            />
            {
              this.state.input1 !== ''
                ?
                <CheckBox
                  checked={this.state.checked}
                />
                :
                <CheckBox />
            }

          </View>
          <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: '5%' }}>
            <TextInput
              keyboardType={'numeric'}
              value={this.state.input2}
              onChangeText={this.handleChange('input2')}
              style={{
                marginBottom: 15,
                height: 45,
                borderWidth: 1,
                borderColor: '#aaa',
                width: '70%',
                borderRadius: 5,
                paddingLeft: 10
              }}
              placeholder="0"
            />
            {
              this.state.input2 !== ''
                ?
                <CheckBox
                  checked={this.state.checked}
                />
                :
                <CheckBox />
            }
          </View>
          <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: '5%' }}>
            <TextInput
              keyboardType={'numeric'}
              value={this.state.input3}
              onChangeText={this.handleChange('input3')}
              style={{
                marginBottom: 15,
                height: 45,
                borderWidth: 1,
                borderColor: '#aaa',
                width: '70%',
                borderRadius: 5,
                paddingLeft: 10
              }}
              placeholder="0"
            />
            {
              this.state.input3 !== ''
                ?
                <CheckBox
                  checked={this.state.checked}
                />
                :
                <CheckBox />
            }
          </View>
          <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'black', marginTop: 20, marginBottom: 20, alignItems: 'center' }}>
            <View style={{ width: 60, height: 60, marginRight: 10, borderRadius: 5 }}>
              <Button onPress={() => this.plus()} title="+" type="outline" />
            </View>
            <View style={{ width: 60, height: 60, marginRight: 10, borderRadius: 5 }}>
              <Button onPress={() => this.minus()} title="-" type="outline" />
            </View>
            <View style={{ width: 60, height: 60, marginRight: 10, borderRadius: 3 }}>
              <Button onPress={() => this.time()} title="x" type="outline" />
            </View>
            <View style={{ width: 60, height: 60, marginRight: 10, borderRadius: 3 }}>
              <Button onPress={() => this.divide()} title="/" type="outline" />
            </View>
          </View>
        </View>
        <Text style={{ fontSize: 24, marginHorizontal: '10%', marginBottom: 10 }}>Hasil :</Text>
        <View style={{
          justifyContent: 'center',
          borderWidth: 1,
          borderRadius: 5,
          height: 50,
          marginHorizontal: '10%',
          borderColor: '#aaa',
          paddingLeft: 10
        }}>
          <Text style={{
            fontSize: 16,
          }}>{this.state.result}</Text>
        </View>
      </View>
    )
  }
}
