import React, {Component} from 'react';
import {Text, StyleSheet, View, ImageBackground,Image,TextInput,TouchableOpacity} from 'react-native';

export default class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          emailValidationError: '',
          passwordValidationError: '',
        };
      }

      
      validator = () => {
        let {email, password} = this.state;
       
        if (email !== null && email.length > 0) email = email.trim();
        if (password !== null && password.length > 0) password = password.trim();
        const error = {
          emailValidationError: '',
          passwordValidationError: '',
        };
        if (
          email === '' ||
          password === '' ||
          !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        ) {
            if (email === '') {
                error.emailValidationError = "Email Can't be Empty";
              }
        
          if (password === '') {
            error.passwordValidationError = "Password Can't be Empty";
          }
          if (
            email !== '' &&
            !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
          ) {
            error.emailValidationError = "Please Check your Format";
          }
          if (
            password !== '' &&
            !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!~%*#?&]{8,16}$/.test(
              password,
            )
          ) {
            error.passwordValidationError = "Please Check your Password Pattern";
          }
          this.setState(error);
          return false;
        } else {
          return true;
        }
      };
    

      onLogin = () => {
        if (this.validator()) {
          const data = {
            email: this.state.email,
            password: this.state.password,
          };
    
          alert(JSON.stringify(data))
    
          // this.props.navigation.navigate('Home');
        }
    
        // this.props.navigation.navigate("Home")
      };
    

  render() {
    return (
      <ImageBackground
        source={require('../assets/signinb.jpg')}
        style={{height: '100%', width: '100%', flex: 1}}
        resizeMode="stretch">
        
<View style={{flex:1,justifyContent:"space-between",flexDirection:"column",}}>
<View style={{backgroundColor:"",justifyContent:"center",alignItems:"center",padding:20}}> 

<Image

source={require('../assets/logo.png')}
style={{height:"30%",width:"100%",}}
/>

</View>
<View style={{backgroundColor:"",margin:"5%"}}>
<View>
    <Text style={{fontSize:20,fontWeight:"600"}}>Email:</Text>
<TextInput
placeholder="Enter Email"
style={{fontSize:18,backgroundColor:"#F5F5F5",borderRadius:30,padding:12,margin:5}}

ref="UserName"
onSubmitEditing={() => {
  this.refs.Password.focus();
}}
onChangeText={email => this.setState({email,emailValidationError:''})}
value={this.state.email}

/>

{this.state.emailValidationError ? (
                      <Text
                        style={{
                          color: 'red',
                          marginBottom: '2%',
                        }}>
                        {this.state.emailValidationError}
                      </Text>
                    ) : null}


</View>

<View>
    <Text style={{fontSize:20,fontWeight:"600"}}>Password:</Text>
<TextInput
placeholder="Enter Password"
keyboardType={'default'}
secureTextEntry={true}
style={{fontSize:18,backgroundColor:"#F5F5F5",borderRadius:30,padding:12,margin:5}}


ref="Password"
onChangeText={password => this.setState({password,passwordValidationError:''})}
/>
{this.state.passwordValidationError ? (
<Text
  style={{
    color: 'red',
    marginBottom: '2%',
  }}>
  {this.state.passwordValidationError}
</Text>
) : null}

<View style={{alignItems:"flex-end"}}>
<TouchableOpacity onPress={()=>{alert("foreget password Click")}}>
<Text style={{color:"#808080",marginRight:20}}>
    Forgot Password?
</Text>
</TouchableOpacity>
</View>
</View>

<TouchableOpacity onPress={this.onLogin} style={{backgroundColor:"#20194C",padding:15,borderRadius:50,justifyContent:"center",alignItems:"center",marginLeft:"15%",marginRight:"15%",marginTop:20}}>
    <Text style={{color:"#fff",fontSize:20}}>SignIn</Text>
</TouchableOpacity>


</View>
<View style={{justifyContent:"center",alignItems:"center",padding:10}}>
<Text style={{fontSize:17}}>
   Don't have an acoount? <Text onPress={()=>alert("Welcome In your SignUp Page")} style={{fontWeight:"bold"}}>SignUp</Text>
</Text>

</View>

</View>
           

  
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({});
