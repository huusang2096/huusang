import React,{Component} from 'react';
import {View , Text,TouchableOpacity,Button,TextInput} from 'react-native';
import Detail from './detail.js'

export default class Edit extends Component {

  constructor(props){
    super(props);
    this.state={
      text:"HELLO",
      Id:this.props.navigation.state.params.ids,
      hoTen:this.props.navigation.state.params.hoten,
      ms:this.props.navigation.state.params.mssv,
      maLop:this.props.navigation.state.params.malop,
      phone:this.props.navigation.state.params.sdt
    };

  }
  render(){

    return(

      <View style={{justifyContent:'center',alignItems:'center'}}>
        <View style={{flexDirection:"row"}}>
          <Text style={{flex:1/3,padding:5,justifyContent:'center',alignItems:'center'}}>Name: </Text>
          <TextInput
            style={{height: 40,flex:2/3}}
            onChangeText={(hoTen) => this.setState({hoTen})}
            value={this.state.hoTen}
          />
        </View>
        <View style={{flexDirection:"row"}}>
          <Text style={{flex:1/3,padding:5,justifyContent:'center',alignItems:'center'}}>MSSV: </Text>
          <TextInput
            style={{height: 40,flex:2/3}}
            onChangeText={(ms) => this.setState({ms})}
            value={this.state.ms}
          />
        </View>
        <View style={{flexDirection:"row"}}>
          <Text style={{flex:1/3,padding:5,justifyContent:'center',alignItems:'center'}}>Mã Lớp: </Text>
          <TextInput
            style={{height: 40,flex:2/3}}
            onChangeText={(maLop) => this.setState({maLop})}
            value={this.state.maLop}
          />
        </View>
        <View style={{flexDirection:"row"}}>
          <Text style={{flex:1/3,padding:5,justifyContent:'center',alignItems:'center'}}>Phone: </Text>
          <TextInput
            style={{height: 40,flex:2/3}}
            onChangeText={(phone) => this.setState({phone})}
            value={this.state.phone}
          />
        </View>
        <View style={{marginBottom:10}}>
          <Button
            onPress={()=>{this.clickEdit()}}
            color='yellow'
            title="Sửa"
          />
        </View>
        <View style={{marginBottom:10}}>
          <Button
            onPress={()=>{this.clickDel()}}
            color='red'
            title="Xóa"
          />
        </View>
        <View>
          <Button
            onPress={() =>{this.props.navigation.goBack()}}
            title="Cancle"
          />
        </View>
      </View>
    );
  }


  clickEdit(){
     fetch("http://192.168.56.1:81/DemoAss/demoEdit.php",{
       method:"Get data to change"
      //  ,
      //  headers:{
      //    "Accept":"application/json",
      //    "Content-Type":"application/json"
      //  }
      //  ,
      //  body:JSON.stringify({
      //    "data1":this.state.hoTen,
      //    "data2":this.state.ms,
      //    "data3":this.state.maLop,
      //    "data4":this.state.phone,
      //    "data5":this.state.Id
      //  })
     })
     .then((response) => {response.json()})
     .catch((e) => {console.error(e);});
  }

  clickDel(){
    fetch("http://192.168.56.1:81/DemoAss/demoDel.php",{
      method:"Delete",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
     //  ,
     //  body:JSON.stringify({
     //    "data1":this.state.hoTen,
     //    "data2":this.state.ms,
     //    "data3":this.state.maLop,
     //    "data4":this.state.phone,
     //    "data5":this.state.Id
     //  })
    })
    .then((res)=>{res.json()})
    .catch((e) => {console.error(e);});
  }

}
//onPress={() =>{this.props.navigation.goBack()}}>
