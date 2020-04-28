import React from 'react';
import {StyleSheet, View, Text,StatusBar, Dimensions,TouchableOpacity,Picker} from 'react-native';

import * as Animatable  from "react-native-animatable";
import {LinearGradient}  from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'



export default class SplashComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            PickerValue:''
        }
    };

    clickme(value){
        const data = this.state.PickerValue;
        if(data==""){
            alert("Please select a option");
        }
        else if(data=="Employee") {
            {this.props.navigation.navigate("SignInScreen")}
        }
        else if(data=="Administration") {
            {this.props.navigation.navigate("SignUpScreen")}
        }
        else if(data=="ForgetPassword") {
            {this.props.navigation.navigate("ForgetPassword")}
        }
        else{
            {this.props.navigation.navigate("SignInScreen")}
        }
    }

render(){
    return(
   
       <View style={styles.container}>
         <StatusBar barStyle="light-content" />
         <View style={styles.header}>
         
            
            <Animatable.Text
             animation="bounceIn"
             duration={3000}
             style={styles.text_header}
               resizeMode={"stretch"}
             >Welcome to Juit</Animatable.Text> 
             <Animatable.Image
             animation="bounceIn"
             duration={3000}
               source={require('./assets/juit2.png')}
               style={styles.logo}
               resizeMode={"stretch"}
             />

         </View>
         <Animatable.View style={styles.footer}
         animation="fadeInUpBig"
         >
             <Text style={styles.title}>Stay connect with everyone!! </Text>
             <Text style={styles.text}>Sign In with account</Text>
             <Picker
         selectedValue={this.state.PickerValue}
        style={{ height: 50, width: 175}}
        onValueChange={(itemValue, itemIndex) => this.setState({PickerValue: itemValue})}
      >
          <Picker.Item 
          color="#99AAAB"
          label="Select a option" value="" />
        <Picker.Item label="Employee" value="Employee" />
        <Picker.Item label="Students" value="Students" />
        <Picker.Item label="Administration" value="Administration" />
        <Picker.Item label="ForgetPassword" value="ForgetPassword" />
      </Picker>
             <View style={styles.button}>
                 <TouchableOpacity
                 onPress={()=>this.clickme()}
                 >
                <LinearGradient 
                colors={['#5db8fe', '#39cff2']}
                style={styles.signIn}
                >
                    <Text style={styles.textSignIn}>Get started</Text>
                    <MaterialIcons name="navigate-next"
                    color="white"
                    size={20}
                    
                    />

                 </LinearGradient>
                 </TouchableOpacity>
            </View>

         </Animatable.View>
       </View>
       
    );
  }
}

const {height} = Dimensions.get("screen");
const height_logo =height * 0.7 * 0.4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05375a',
     
  },

  header:{
      flex:2,
      alignItems: 'center',
      justifyContent: "center",
  },
  text_header:{
    color: "white",
    fontWeight:"100",
    fontSize:35,
    justifyContent:"space-evenly",
    alignItems:"flex-start",
    marginBottom:-20
   
},
  footer:{
      flex:1,
      backgroundColor:"white",
      borderTopLeftRadius:40,
      borderTopRightRadius:40,
      paddingVertical:50,
      paddingHorizontal:40
      
  },
  logo:{
      marginTop:50,
      width: height_logo,
      height: height_logo,
  },
  title:{
      color:'#05375a',
      fontWeight:'bold',
      fontSize:40,
  },
  text:{
      fontSize:20,
      color: "#05375a",
      marginTop:15,
      marginBottom:-5,


  },
  button:{
      alignItems:"flex-end",
      marginTop:30,
      
  },
  signIn:{
      width:150,
      height:40,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:50,
      flexDirection:'row'
  },
  textSignIn:{
      color:"#fff",
      fontWeight:"bold",
      
  }
 
});