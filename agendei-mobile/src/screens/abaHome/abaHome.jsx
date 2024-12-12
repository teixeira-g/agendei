import {View, Text, FlatList} from "react-native";
import {styles} from './abaHome.styles.js'
import {doctors} from "../../constants/data";
import Doctor from "../../components/doctor/doctor.jsx";

function AbaHome(props) {

    function ClickDoctor(id_doctor, name, specialty, icon){
        props.navigation.navigate("services")
    }

    return (
        <View style={styles.container}>

            <View style={styles.containerText}>
                <Text tyle={styles.text}>Agende os seus serviços médicos</Text>
            </View>

            <FlatList data={doctors}
                      keyExtractor={(doc)=> doc.id_doctor}
                      renderItem={({item}) => {
                          return <Doctor id_doctor={item.id_doctor}
                             name={item.name}
                             icon={item.icon} // M or F
                             specialty={item.specialty}
                             onPress={ClickDoctor}
                          />}}
                      showsVerticalScrollIndicator={false}/>

        </View>
    );
}

export default AbaHome;