import React,{Component} from 'react';
import {View , Text,TouchableOpacity,Button,Image,FlatList,StyleSheet,TouchableHighlight} from 'react-native';

export default class Detail extends Component {

  constructor(props){
    super(props);
    this.state={
      mang:[]
    };
  }

  render(){
    return(
      <View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:30}}> Tab2 </Text>
        </View>
        <View>
          <FlatList
           data={this.state.mang}
           renderItem={({item}) =>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Screen_Edit',{ids:item.key,hoten:item.HOTEN,mssv:item.MSSV,malop:item.MALOP,sdt:item.SDT})}>
                <View
                style={{flexDirection:"row",marginBottom:10,borderBottomWidth:1,borderColor:'gray'}}
                onPress={()=> this.seeAll()}>
                  <View style={{flex:1}}>
                      <Text>Id: {item.key}</Text>
                      <Text>Full name: {item.HOTEN}</Text>
                      <Text>MSSV: {item.MSSV}</Text>
                  </View>
                  <View style={{flex:1}}>
                      <Text>Code Class: {item.MALOP}</Text>
                      <Text> </Text>
                      <Text>Phone: {item.SDT}</Text>
                  </View>
                </View>
              </TouchableHighlight>
            }
          />
        </View>
      </View>
    );
  }

    componentDidMount(){
      return fetch("http://192.168.56.1:81/DemoAss/takeData.php",{
        method:"GET",
        headers:{
          "Accept":"application/json",
          "Content-Type":"application/json"
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          mang:responseJson
        });
      })
      .catch((error) => {
        console.error(error);
      });

      }

      seeAll(){

      }
}
