import {View} from "react-native";
import {styles} from './schedule.styles.js'
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import {ptBR} from "../../constants/calendar.js";

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

function Schedule() {
    return (
        <View style={styles.container}>
            <Calendar/>
        </View>
    );
}

export default Schedule;