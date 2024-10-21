import {View, Text, FlatList} from "react-native";
import {styles} from './abaHome.styles.js'
import {doctors} from "../../constants/data";
import Doctor from "../../components/doctor/doctor.jsx";
import icon from "../../constants/icon.js";

function AbaHome() {
    return (
        <View style={styles.container}>
            <Text tyle={styles.text}>Agende os seus serviços médicos</Text>

            <FlatList data={doctors}
                      keyExtractor={(doc)=> doc.id_doctor}
                      renderItem={({item}) => {
                          return <Doctor name={item.name}
                             icon={item.icon === "M" ? icon.male : icon.female}
                             specialty={item.specialty} />}}
                      showsVerticalScrollIndicator={false}/>
        </View>
    );
}

export default AbaHome;