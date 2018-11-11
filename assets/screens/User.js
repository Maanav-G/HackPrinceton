import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons'

class User extends Component {
        
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.container}>
                <Icon name="ios-person" color={'#843535'} size={100} />
                <Text style={styles.text}>Name:</Text>
                <Text style={styles.text}>E-Mail:</Text>
                <Text style={styles.text}>Phone Number:</Text>
            </View>
        );
    }
}
export default User;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 30,
        color: '#843535',
        textAlign: 'left',
    }
});