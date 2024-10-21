import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import icon from '../../constants/icon.js';
import Button from '../../components/button/button.jsx';
import {styles} from "./login.styles";

function Login() {
    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image source={icon.logo} style={styles.logo}/>
            </View>

            <View>
                <TextInput placeholder={"E-mail"} style={styles.input}/>
                <TextInput placeholder={"Senha"} style={styles.input} secureTextEntry={true}/>
                <Button text={'Acessar'}/>
            </View>

            <View style={styles.footer}>
                <Text>Não tenho conta.</Text>
                <TouchableOpacity><Text style={styles.footerLink}> Criar conta agora</Text></TouchableOpacity>
            </View>
        </View>
    );
}

export default Login;