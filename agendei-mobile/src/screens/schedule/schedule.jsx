import {Text, View} from "react-native";
import {useState} from "react";
import {styles} from './schedule.styles.js'
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import {ptBR} from "../../constants/calendar.js";
import {Picker} from "@react-native-picker/picker";
import Button from '../../components/button/button.jsx'

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

function Schedule(props) {

    const id_doctor = props.route.params.id_doctor;
    const id_service = props.route.params.id_service;

    const [selectedDate, setSelectedDate] = useState('');
    const [selectedHour, setSelectedHour] = useState("");

    function ClickBooking(){
        console.log(id_doctor, id_service, selectedDate, selectedHour);
    }

    return (
        <View style={styles.container}>

            <View>

                <Calendar theme={styles.theme}
                          onDayPress={(day) => {setSelectedDate(day.dateString)}}
                          markedDates={{
                              [selectedDate]: {selected: true}
                          }}
                          minDate={new Date().toDateString()}
                />

                <View style={styles.containerHour}>
                    <Text style={styles.textHour}>Horário:</Text>
                </View>

                <View>
                    <Picker selectedValue={selectedHour}
                            onValueChange={(itemValue, itemIndex)=>{
                                setSelectedHour(itemValue);
                            }}
                    >
                        <Picker.Item label={'09:00'} value={'09:00'}/>
                        <Picker.Item label={'09:30'} value={'09:30'}/>
                        <Picker.Item label={'10:00'} value={'10:00'}/>
                    </Picker>
                </View>

            </View>

            <View>
                <Button text={'Confirmar reserva'} onPress={ClickBooking}/>
            </View>

        </View>

    );
}

export default Schedule;