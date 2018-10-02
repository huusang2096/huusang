import React,{Component} from 'react';
import {View , Text,TouchableOpacity,Button,Image,TextInput} from 'react-native';

export default class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      maLop:"",
      mssv:"",
      ten:"",
      sdt:"",
      kq:"..."
    };
  }

//hàm thêm
  _clickAdd(){
    fetch("http://192.168.56.1:81/DemoAss/dangky.php",{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        "line1":this.state.maLop,
        "line2":this.state.mssv,
        "line3":this.state.ten,
        "line4":this.state.sdt
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({kq:responseJson.ketqua})
    })
    .catch((error) => {console.error(error)});
  }



  render(){
    //console.warn('YellowBox is disabled');
    return(
      <View>
        <View style={{justifyContent:'center',backgroundColor:'white',flexDirection:'row',marginTop:5}}>
          <Text style={{fontSize:17,padding:5,color:'black',flex:1/3}}>Mã Lớp:</Text>
          <TextInput
            style={{height: 40,color:'blue',flex:2/3}}
            placeholder="Type here to translate!"
            onChangeText={(maLop) => this.setState({maLop})}
            value={this.state.maLop}
          />
        </View>
        <View style={{justifyContent:'center',backgroundColor:'white',flexDirection:'row',marginTop:5}}>
          <Text style={{fontSize:17,padding:5,color:'black',flex:1/3}}>Mã Sinh Viên:</Text>
          <TextInput
            style={{height: 40,color:'blue',flex:2/3}}
            placeholder="Type here to translate!"
            onChangeText={(mssv) => this.setState({mssv})}
            value={this.state.mssv}
          />
        </View>
        <View style={{justifyContent:'center',backgroundColor:'white',flexDirection:'row',marginTop:5}}>
          <Text style={{fontSize:17,padding:5,color:'black',flex:1/3}}>Họ và Tên:</Text>
          <TextInput
            style={{height: 40,color:'blue',flex:2/3}}
            placeholder="Type here to translate!"
            onChangeText={(ten) => this.setState({ten})}
            value={this.state.ten}
          />
        </View>
        <View style={{justifyContent:'center',backgroundColor:'white',flexDirection:'row',marginTop:5}}>
          <Text style={{fontSize:17,padding:5,color:'black',flex:1/3}}>Số Điện Thoại:</Text>
          <TextInput
            style={{height: 40,color:'blue',flex:2/3}}
            placeholder="Type here to translate!"
            onChangeText={(sdt) => this.setState({sdt})}
            value={this.state.sdt}
          />
        </View>
        <Button
          onPress={() => {this._clickAdd()}}
          title="Đăng Ký"
        />
        <View style={{backgroundColor:'green'}}>
          <Text>{this.state.kq}</Text>
        </View>
      </View>

    );
  }


}
