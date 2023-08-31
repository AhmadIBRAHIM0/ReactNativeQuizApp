import {View, Text, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native'
import React, {useState} from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";

const QuizScreen = ({route, navigation}) => {
    const [score, setScore] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

    const {questions} = route.params;
    const answerOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    const handleAnswerSelection = (index) => {
        setSelectedAnswerIndex(index);
    };


    const renderAnswers = (answers) => {
        return answers.map((answer, index) => (
            <TouchableHighlight
                key={index}
                style={selectedAnswerIndex === index ? styles.selectedAnswerButton : styles.answerButton}
                onShowUnderlay={() => handleAnswerSelection(index)}
                onPress={() => handleAnswerSelection(index)}
            >
                <Text style={selectedAnswerIndex === index ? styles.selectedAnswerText : styles.answerText}>
                    {answerOptions[index]}) {answer.title}
                </Text>
            </TouchableHighlight>
        ));
    };

    const validateAnswer = (answer) => {
        setSelectedAnswerIndex(null)
        if (answer.isCorrect) {
            setScore(score + 1);
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            navigation.replace('ResultScreen', {
                score: score,
                totalQuestions: questions.length,
            });
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Question: {currentQuestionIndex + 1} / {questions.length}
                </Text>
                <Text style={styles.headerText}>Score: {score}</Text>
            </View>
            <Text style={styles.questionText}>
                {questions[currentQuestionIndex].title}
            </Text>
            {renderAnswers(questions[currentQuestionIndex].answers)}
            <TouchableOpacity
                style={styles.validateButton}
                onPress={() => validateAnswer(questions[currentQuestionIndex].answers[selectedAnswerIndex])}
            >
                <Text style={styles.validateButtonText}>Validate</Text>
            </TouchableOpacity>
        </View>
    );
};

QuizScreen.navigationOptions = ({ navigation }) => {
    return {
        title: 'Quiz',
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
                <Ionicons name="close-outline" size={30} color="black" />
            </TouchableOpacity>
        ),
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        width: '100%',
        backgroundColor: 'cornflowerblue',
        padding: 17,
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    questionText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    answerButton: {
        padding: 10,
        width: '95%',
        marginBottom: 10,
        borderRadius: 13,
        borderColor: 'blue',
        borderWidth: 1,
    },
    answerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'blue',
    },
    selectedAnswerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    selectedAnswerButton: {
        padding: 10,
        width: '95%',
        marginBottom: 10,
        borderRadius: 13,
        backgroundColor: 'blue',
        color: 'white',
    },
    validateButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 13,
    },
    validateButtonText: {
        color: 'white',
    }
});
export default QuizScreen
