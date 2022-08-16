/**
 * Represents styles for Card Component
 * @author Nishma Shah
 * @version 1.0.0
 */
import { StyleSheet } from "react-native"
import colors from './Themes';

export default StyleSheet.create({
    backCard: {
        alignItems: "center",
        backgroundColor: colors.frontCardBg,
        height: '30%',
        width: '30%',
        marginTop: 30,
        borderRadius: 10,
        justifyContent: 'center',
        borderColor: colors.borderColor,
        borderWidth: 3,
        aspectRatio:1
    },
    frontCard: {
        alignItems: "center",
        backgroundColor: colors.backCardBg,
        height: '30%',
        width: '30%',
        marginTop: 30,
        borderRadius: 10,
        justifyContent: 'center',
        borderColor: colors.borderColor,
        borderWidth: 3,
        aspectRatio:1
    }

});