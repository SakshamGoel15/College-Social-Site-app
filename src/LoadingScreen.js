import React from 'react';
import {StyleSheet, View, Text , ActivityIndicator} from 'react-native';
import * as firebase from 'firebase';


export default class LoadingScreen extends React.Component{

    static navigationOptions ={
        tittle:"Loading",
        headerShown: null,
    };

    componentDidMount(){
        firebase.auth().onAuthStateChanged( (authenticate) => {
            if (authenticate) {
                this.props.navigation.replace("HomeScreen");
            } else{
                this.props.navigation.replace("SplashScreen");
            }

        })
    }

render(){
    return(
   
       <View style={styles.hello}>
         <ActivityIndicator size="large" color="#00ff00" />
       </View>
       
    );
  }
}
const styles = StyleSheet.create({
  hello: {
    flex: 1,
    backgroundColor: '#fff',
     alignItems: 'center',
    justifyContent: "center",
  },
 
});
