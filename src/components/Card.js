/**
 * Represents a Card Component.
 * @author Nishma Shah
 * @version 1.0.0
 * This component represents a single card UI template 
 * and its associated functionalities.
 */

import { Text, TouchableOpacity } from "react-native";
import styles from '../styles/Card.styles';

const Card = ({ card, onCardPress, flipCard, preventSelection }) => {

  //Handler for on card press
  const cardPressHandler = () => {
    if(!preventSelection)
    onCardPress(card);
  }

  return (
    <TouchableOpacity
      style={flipCard ? styles.backCard : styles.frontCard}
      onPress={cardPressHandler}
    >
      <Text>{flipCard ? card.cardNumber : '?'}</Text>
    </TouchableOpacity>

  )
}

export default Card;