import {COLORS, FONT_SIZE} from '../../constants/theme'

export const styles = {
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 40,
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    theme:{
        todayTextColor: COLORS.red,
        selectedDayBackgroundColor: COLORS.blue,
        SelectedDayTextColor: COLORS.white,
        arrowColor: COLORS.blue,
    },
    textHour:{
        fontSize: FONT_SIZE.lg,
        fontWeight: 'bold',
        color: COLORS.gray2,
        marginTop: 20,
    },
    containerHour:{
        alignItems: 'center',
    }
}