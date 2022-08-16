/**
 * Represents a Memory Game Screen.
 * @author Nishma Shah
 * @version 1.0.0
 * This is the UI screen for Memory Game with Cards and its main features.
 */
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Button, Text, View } from "react-native";
import Card from "../components/Card";
import SuccessDialog from "../components/SuccessDialog"
import { generateUniqueArray } from '../utils/helper';
import styles from '../styles/MemoryGame.styles';

const MemoryGame = () => {
    const [cards, setCards] = useState([]);
    const [steps, setSteps] = useState(0);
    const [selectedCardOne, setSelectedCardOne] = useState(null);
    const [selectedCardTwo, setSelectedCardTwo] = useState(null);
    const [preventSelection, setPreventSelection] = useState(false);
    const [foundMatch, setFoundMatch] = useState(0);

    useEffect(() => {
        shuffleCards();
    }, []);

    useEffect(() => {
        if (selectedCardOne && selectedCardTwo) {
            setPreventSelection(true);
            if (selectedCardOne.cardNumber === selectedCardTwo.cardNumber) {
                setCards((prevCards) => {
                    return prevCards.map((cardItem) => {
                        if (cardItem.cardNumber === selectedCardOne.cardNumber) {
                            return {
                                ...cardItem,
                                matched: true
                            }
                        }
                        return cardItem;
                    });
                });
                setFoundMatch((prevState) => prevState + 2);
                resetCards();
            } else {
                setTimeout(() => resetCards(), 1000);
            }
        }

    }, [selectedCardOne, selectedCardTwo]);

    const resetCards = () => {
        setSelectedCardOne(null);
        setSelectedCardTwo(null);
        setPreventSelection(false);
    }

    const shuffleCards = () => {
        const CARD_PAIRS_VALUE = generateUniqueArray();
        const cardList = [...CARD_PAIRS_VALUE, ...CARD_PAIRS_VALUE]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ cardNumber: card, id: Math.random(), matched: false }));
        setFoundMatch(0);
        setSelectedCardOne(null);
        setSelectedCardTwo(null);
        setCards(cardList);
        setSteps(0);

    }

    const onCardPress = (selectedCard) => {
        selectedCardOne ? setSelectedCardTwo(selectedCard) : setSelectedCardOne(selectedCard);
        setSteps((prevState) => prevState + 1);
    }

    return (
        <SafeAreaView style={styles.container}>
            {foundMatch !== 0 && foundMatch === cards.length &&
                <SuccessDialog title={`You win this game by ${steps} steps`} action={shuffleCards} />
            }
            <View style={styles.actionBar}>
                <Button
                    title="Restart"
                    onPress={() => shuffleCards()}
                />
                <Text style={styles.stepsContainer}>STEPS: {steps}</Text>
            </View>
            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={styles.cardContainer}
                scrollEnabled={true}
            >
                {cards.map((card) =>
                    <Card key={card.id}
                        flipCard={card === selectedCardOne || card === selectedCardTwo || card.matched}
                        card={card}
                        preventSelection={preventSelection}
                        onCardPress={onCardPress} />
                )}
            </ScrollView>
        </SafeAreaView>

    )
}

export default MemoryGame;