import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import SplashComponent from "./SplashComponent";
import SignInComponent from "./SignInComponent";
import SignupComponent from "./SignupComponent";
import LoadingScreen from './LoadingScreen';
import homeScreen from "./homeScreen" 
import  ForgetPassword  from "./ForgetPassword";
import first_time_changepassword from "./first_time_changepassword"
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD1nJ7roRf3poyBhmFrC5MF2PXhW7gYgwA",
    authDomain: "college-app-cad6d.firebaseapp.com",
    databaseURL: "https://college-app-cad6d.firebaseio.com",
    projectId: "college-app-cad6d",
    storageBucket: "college-app-cad6d.appspot.com",
    messagingSenderId: "257516324229",
    appId: "1:257516324229:web:7e22823b5987a1ed5970ec",
    measurementId: "G-1Y75Q6641P"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }
 
const StackNavigator = createStackNavigator({
    Loading: {
        screen:LoadingScreen,
        navigationOptions: {
            headerShown:false
    }},
    SplashScreen: {
        screen:SplashComponent,
        navigationOptions: {
            headerShown:false
        }
    },
    SignInScreen:{
        screen:SignInComponent,
        navigationOptions:{
            headerShown:false
        }
    },
    SignUpScreen:{
        screen:SignupComponent,
        navigationOptions:{
            headerShown:false
        }
    },
    ForgetPassword:{
        screen:ForgetPassword,
        navigationOptions:{
            headerShown:false
        }
    },
    HomeScreen:{
        screen:homeScreen,
        navigationOptions:{
            headerShown:false
        }
    },
    ChangepasswordScreen:{
        screen:first_time_changepassword,
        navigationOptions:{
            headerShown:false
        }
    }
},
{
    //launcher screen
    initialRouteName : "Loading"
  }
)
export default createAppContainer(StackNavigator)