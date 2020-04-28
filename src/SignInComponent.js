import React from 'react';
import {StyleSheet, View,ScrollView, Text,StatusBar,TouchableWithoutFeedback, Dimensions,TouchableOpacity,TextInput,Keyboard,KeyboardAvoidingView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {LinearGradient}  from 'expo-linear-gradient';
import * as Animatable  from "react-native-animatable";
import * as firebase from 'firebase';
import {Form ,Item ,Input, Label, Button} from 'native-base';




export default class SignInComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            check_textInputChange: false,
            user_id:"",
            password:'',
            secureTextEntry:true,
            
        }
    }



    SignInUser = (user_id,password)=>{
        const { navigation } = this.props; 
        const ChangeScreen = navigation.getParam('ChangeScreen')
        firebase
        .auth()
        .signInWithEmailAndPassword(user_id,password)
        .then(()=>{
            if(ChangeScreen == true){
            this.props.navigation.replace("HomeScreen");
          }
          else{
               this.props.navigation.replace("ChangepasswordScreen");
              
          }
        
        })
        .catch(error =>{
            alert(error.message);
            
        })
    

    }

    textInputChange(value){
        if(value.length!==0){
            this.setState({
                check_textInputChange: true
            });
        }
        else{
            this.setState({
                check_textInputChange: false,
                
        })
    };
}

secureTextEntry(){
    this.setState({
        secureTextEntry: !this.state.secureTextEntry
    })

}
render(){

    
    return(
        <TouchableWithoutFeedback
        onPress={()=>{
            Keyboard.dismiss()
        }}
        style={styles.wrapper}
        >
             
   
        <KeyboardAvoidingView
         style={styles.container}
         
          behavior="height"
          enabled
          
          >
              
           <View style={styles.header}>
           <Animatable.Text
             animation="bounceIn"
             duration={3000}
             style={styles.text_header}
               resizeMode={"stretch"}>
                   Jaypee University Of Information And Technology</Animatable.Text>
         
            <Animatable.Image
             animation="bounceIn"
             duration={3000}
               source={require('./assets/juit2.png')}
               style={styles.logo}
               resizeMode={"stretch"}
             />
           </View>



           <Animatable.View
           
           animation="fadeInUpBig"
           style={styles.footer}>
           
           <ScrollView style={styles.scrollView}>
           
               
               <Text style={styles.text_footer_heading}>STUDENT LOGIN</Text>
            <Text style={styles.text_footer}>User-Id</Text>
            <View style={styles.action}>
                <FontAwesome
                name="user-circle-o"
                color="#05375a"
                size={20}
                />
                <TextInput
                placeholder="your user-id..."
                style={styles.textInput}
                keyboardType="email-address"
                onChangeText={user_id =>this.setState({
                    user_id
                })}
                />
                {this.state.check_textInputChange ?
                <Animatable.View
                animation="bounceIn">
                <Feather
                name="check-circle"
                color="#05375a"
                size={20}
                />
                </Animatable.View>
                :null}

            </View>
            
            <Text style={[styles.text_footer,{marginTop:20}]}>Password</Text>
            <View style={styles.action}>
                <Entypo
                name="key"
                color="#05375a"
                size={20}
                />
                {this.state.secureTextEntry ?
                <TextInput
                placeholder="your password..."
                secureTextEntry={true}
                style={styles.textInput}
                keyboardType="default"
                value={this.state.password}
                onChangeText={password =>this.setState({
                    password
                })}

                />
                :
                <TextInput
                placeholder="your password..."
                secureTextEntry={false}
                style={styles.textInput}
                keyboardType="default"
                value={this.state.password}
                onChangeText={(text)=>this.setState({
                    password:text
                })}

                />
            }
                <TouchableOpacity
                onPress={()=>this.secureTextEntry()}>
                    {this.state.secureTextEntry ?
                <Feather
                name="eye-off"
                color="#05375a"
                size={20}
                />
                :
                <Feather
                name="eye"
                color="#05375a"
                size={20}
                />
                }
                </TouchableOpacity>
                

            </View>

            <TouchableOpacity
            onPress={()=>{
                this.props.navigation.navigate("ForgetPassword")
            }}
            >
            <Text style={{color:'#009bd1',marginTop:15}}>Forget password ?</Text>

            </TouchableOpacity>


            <View style={styles.textPrivate}>
               <Text style={styles.color_textPrivate}>
                   {" "}
                   By signing in you agree to our
               </Text>



               <Text style={[styles.color_textPrivate,{fontWeight:'bold'}]}> 
                   {" "}
                   Terms of service
               </Text>
               <Text style={styles.color_textPrivate}>
                   {" "}
                   and
               </Text>
               <Text style={[styles.color_textPrivate,{fontWeight:'bold'}]}>
                   {" "}
                   Privacy Policy
               </Text>
           </View>
            <View style={styles.button}>
                 <TouchableOpacity
                 onPress={()=>this.SignInUser(
                    this.state.user_id,
                    this.state.password,
                 )}
                 >
                <LinearGradient 
                colors={['#5db8fe', '#39cff2']}
                style={styles.signIn}
                >
                    <Text style={[styles.textSign,{color:'white'}]}>Sign In</Text>
                </LinearGradient>
                </TouchableOpacity>
            </View>

            <View style={styles.scroll}></View>
            
           
           
           </ScrollView>
           
           </Animatable.View>
            
           </KeyboardAvoidingView>
           
        </TouchableWithoutFeedback>
        
        
           
           
    );
  }
}
const {height} = Dimensions.get("screen");
const height_logo =height * 0.6 * 0.4;

const styles = StyleSheet.create({
    wrapper:{
         flex:1,
   },

    
   
  container: {
    flex: 1,
    backgroundColor: '#05375a',
    marginTop:0,
},

  scrollView:{
    flex:1,
    backgroundColor:"white",
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    paddingHorizontal:35
 
},

  header:{
      flex:1,
      backgroundColor: '#05375a',
      justifyContent: "center",
      alignItems:"center",
      paddingHorizontal:20,
     paddingBottom:25,
     paddingTop:45
      
  },
  footer:{
      flex:1.6,
      backgroundColor:"white",
      borderTopLeftRadius:40,
      borderTopRightRadius:40,
    //    marginBottom:-25,
    //   paddingHorizontal:20,
      
      
      
  },
  text_header:{
    color: "white",
    fontWeight:"bold",
    fontSize:28,
    
    justifyContent:"center",
    alignItems:"center",
    marginLeft:0,
      
  },
  text_footer:{
     color: '#05375a',
     fontSize:18,

  },
  action:{
     flexDirection:"row",
     marginTop:10,
     borderBottomWidth:1,
     borderBottomColor:'#f2f2f2',
     paddingBottom:5
  },
  textInput:{
      flex:1,
      paddingLeft:10,
      color:'#05375a' 

  },
 button:{

      alignItems:'center',
      marginTop:20,
  },
  signIn:{
      width:330,
      height:50,
      justifyContent:"center",
      alignItems:"center",
      borderRadius:20,
      
  },
  textSign:{
      fontSize:18,
      fontWeight:'bold',
  },
  text_footer_heading:{
      color:"#05375a",
      fontWeight:"bold",
      fontSize:25,
      paddingVertical:30
  },
  logo:{
    marginTop:30,
    width: height_logo,
    height: height_logo,
},
scroll:{
height:30,
},
textPrivate:{
  flexDirection:"row",
  flexWrap:'wrap' ,
  marginTop:20 
},
color_textPrivate:{
    color:"grey"
},
})