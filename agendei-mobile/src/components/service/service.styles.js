import {COLORS, FONT_SIZE} from '../../constants/theme'

export const styles = {
    service: {
        backgroundColor: COLORS.white,
        flex: 1,
        flexDirection: 'row',
        padding: 12,
        borderWidth: 1,
        borderColor: COLORS.gray4,
    },
    containerText:{
        flex: 1
    },
    containerButton:{
        marginTop: 5,
    },
    description:{
        fontSize: FONT_SIZE.md,
        color: COLORS.gray3,
        marginTop: 5,
    },
    price:{
        fontSize: FONT_SIZE.md,
        color: COLORS.blue,
        marginTop: 3,
    }
}