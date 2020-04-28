
import React from 'react';
import {StyleSheet, View, Text,KeyboardAvoidingView ,Image ,TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import {Form ,Item ,Input, Label, Button} from 'native-base'




export default class HomeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            email: "",
            name:"",
            isAnonymous:'',
            ChangeScreen:true,
        }
    }
   

    componentDidMount(){
        firebase.auth().onAuthStateChanged(authenticate => {
            if (authenticate) {
                this.setState({
                    email:authenticate.email,
                    name:authenticate.uid,
                    isAnonymous:authenticate.isAnonymous,
                })
            } else{
                this.props.navigation.navigate("SignInScreen",{
                    ChangeScreen: this.state.ChangeScreen,
                })
            }
        })
    }
    
    signOutUser=()=>{
        firebase
        .auth()
        .signOut()
        .then(() =>{
             console.log("signout")
         })
        .catch(error=>{
            alert(error.message)
        })
    }

render(){
    return(
   
       <View style={styles.container}>
         <View style={styles.logoContainer}>
             {/* <Image
             source={require('../assets/logo.png')}
             /> */}
             <Text>LearCodeOnline.in</Text>
         </View>
         <View style={styles.userDetails}>
             <Text>Hey {this.state.isAnonymous}</Text>
             <Text>You are signed in as : {this.state.email}</Text>
         </View>
         <Button
         style ={ styles.button}
         full
         rounded
         success
         onPress = {()=>{
             this.signOutUser()
            }}>
             <Text style = {styles.buttonText}>signOut</Text>
         </Button>
       </View>
       
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      margin: 20
    },
    logoContainer: {
      alignItems: "center",
      marginTop: 100,
      marginBottom: 100
    },
    userDetails: {},
  
    button: {
      marginTop: 20
    },
    buttonText: {
      color: "#fff"
    }
  });
