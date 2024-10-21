import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import icon from '../../constants/icon.js'
import Button from '../../components/button/button.jsx';
import {styles} from "../login/login.styles";

function CreateAccount() {
    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image source={icon.logo} style={styles.logo}/>
            </View>

            <View>
                <TextInput placeholder={'Nome'} style={styles.input}/>
                <TextInput placeholder={"E-mail"} style={styles.input}/>
                <TextInput placeholder={"Senha"} style={styles.input} secureTextEntry={true}/>
                <Button text={'Criar Conta'}/>
            </View>

            <View style={styles.footer}>
                <Text>Já tenho conta.</Text>
                <TouchableOpacity><Text style={styles.footerLink}> Fazer login</Text></TouchableOpacity>
            </View>
        </View>
    );
}

export default CreateAccount;