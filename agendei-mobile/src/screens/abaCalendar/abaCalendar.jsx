import {View, Text, FlatList} from "react-native";
import {styles} from './abaCalendar.styles.js'
import {appointments} from "../../constants/data";
import Appointment from "../../components/appointment/appointment";

function AbaCalendar() {
    return (
        <View style={styles.container}>

            <FlatList data={appointments}
                      keyExtractor={(appoint)=> appoint.id_appointment}
                      renderItem={({item}) => {
                          return <Appointment service={item.service}
                                              doctor={item.doctor}
                                              specialty={item.specialty}
                          />;
                      }}
                      showsVerticalScrollIndicator={false}/>
        </View>
    );
}

export default AbaCalendar;