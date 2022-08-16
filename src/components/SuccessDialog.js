/**
 * Represents a Dialog Component.
 * @author Nishma Shah
 * @version 1.0.0
 * This component represents the Dialog component, 
 * which is displayed after the game is successfully completed.
 */
import { Alert } from "react-native";
const SuccessDialog = ({ action, title }) =>
    Alert.alert(
        "Congratulations",
        title,
        [
            {
                text: "Try another round",
                onPress: () => action(),
                style: "cancel",
            },
        ]
    );

export default SuccessDialog;