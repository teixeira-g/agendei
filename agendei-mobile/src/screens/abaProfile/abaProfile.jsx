import {Text, View} from "react-native";
import {styles} from "./abaProfile.styles.js";

function AbaProfile() {
    return (
        <View style={styles.container}>

            <View style={styles.item}>
                <Text style={styles.title}>Nome</Text>
                <Text style={styles.text}>Gabriel Teixeira</Text>
            </View>

            <View style={styles.item}>
                <Text style={styles.title}>E-mail</Text>
                <Text style={styles.text}>gabriel.txr00@gmail.com</Text>
            </View>

        </View>
    );
}

export default AbaProfile;