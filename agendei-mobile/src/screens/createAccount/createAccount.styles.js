import {COLORS, FONT_SIZE} from '../../constants/theme'

export const styles = {
    logo:{
        width: 100,
        height: 23,
    },
    container:{
        backgroundColor: COLORS.white,
        flex:1,
        justifyContent: 'space-between',
        padding: 50,
    },
    containerLogo: {
        alignItems: "center",
        marginTop: 35,
    },
    input:{
        backgroundColor: COLORS.gray5,
        padding: 10,
        borderRadius: 6,
        marginBottom: 15,
        height: 50
    },
    footer:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    footerLink:{
        color: COLORS.blue
    },
}