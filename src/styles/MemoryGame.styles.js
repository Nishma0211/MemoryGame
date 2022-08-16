/**
 * Represents styles for Memory Screen
 * @author Nishma Shah
 * @version 1.0.0
 */
import { StyleSheet } from "react-native";
import colors from './Themes';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    actionBar: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    stepsContainer: {
        color: colors.primaryText,
    },
    cardContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }


});