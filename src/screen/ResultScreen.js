import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ResultScreen = ({ route }) => {
    const { score, totalQuestions } = route.params;
    const navigation = useNavigation();

    const handleReturnToHome = () => {
        // Navigate back to HomeScreen
        navigation.navigate('HomeScreen');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.resultText}>Quiz Completed!</Text>
            <Text style={styles.scoreText}>
                Your Score: {score} / {totalQuestions}
            </Text>
            <TouchableOpacity
                style={styles.returnButton}
                onPress={handleReturnToHome}
            >
                <Text style={styles.returnButtonText}>Return to Home</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    resultText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    scoreText: {
        fontSize: 18,
    },
    returnButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
    },
    returnButtonText: {
        color: 'white',
    },
});

export default ResultScreen;
