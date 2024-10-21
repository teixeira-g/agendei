import {Alert, Text, TouchableOpacity} from "react-native";
import {styles} from './button.styles';


function Button(props){

    function TesteClick(){
        Alert.alert("Clicou no botão")

    }

    return(
        <TouchableOpacity onPress={TesteClick}
                          style={[styles.btn,
                              props.theme === "danger" ? styles.danger : styles.primary]} >
            <Text style={styles.text}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );
}

export default Button;