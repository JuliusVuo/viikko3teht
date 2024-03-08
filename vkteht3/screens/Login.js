import React, { useState } from 'react'
import MainAppbar from '../components/MainAppbar';
import { StyleSheet, View} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function Login(){
    const [formData, setFormData]= useState({username:'',password:''})
    const [showError, setShowError]= useState(false)

    const validateAndSubmit = () => {
        setShowError(true)
        if (formData.username.length > 0 && formData.password.length > 8){
            setFormData ({username: '', password: ''})
            setShowError(false)
        }
    }

    return (
        < >
            <MainAppbar title="Login"/>
            <View style={styles.container}>
                <TextInput label="Username" 
                placeholder='username'
                style={styles.input_field}
                value={formData.username}
                onChangeText={text => setFormData({...formData,username: text})}
                error={formData.username.length===0 && showError}
                />
                <TextInput label="Password" 
                placeholder='password'
                style={styles.input_field} 
                keyboardType='visible-password'
                value={formData.password}
                onChangeText={text => setFormData({...formData,password: text})}
                error={formData.password.length < 8 && showError}
                />
                <Button mode="contained" style={styles.button} onPress={validateAndSubmit} title="Submit">Submit</Button>
            </View>
         </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundcolor: '#fff',
        marginTop: 24
    },
    input_field:{
        backgroundcolor: '#fcfcfc',
        margin: (16,8,16,8)
    },
    button:{
        margin: (16,8,16,8),
        borderRadius: 1,
    },

});