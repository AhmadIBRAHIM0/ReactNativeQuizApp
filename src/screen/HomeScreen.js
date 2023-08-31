import {View, Text, StyleSheet, FlatList, ActivityIndicator, Pressable, Image} from 'react-native'
import React, {useEffect, useState} from 'react'
import useHttp from "../hooks/useHttp";

const API = "http://estiamqcm.davilat.com/api/quizzes"


const HomeScreen = ({navigation}) => {

    const [loading, setLoading] = useState(true);
    const [quizzes, setQuizzes] = useState([]);
    const {makeHttpGetRequest} = useHttp()

    useEffect(() => {

        makeHttpGetRequest(API)
            .then((quizzes) => {
                setQuizzes(quizzes);
                setLoading(false)
            })
    }, []);

    const renderQuizItem = ({item}) => {
        return (
            <Pressable onPress={() => navigation.navigate('QuizScreen', {
                questions: item.questions,
            })}>
                <View style={styles.card}>
                    <Image source={{uri: item.image}} style={styles.quizImage}/>
                    <Text style={styles.quizTitle}>{item.title}</Text>
                    <Text style={styles.questions}>{item.questions.length} questions</Text>
                </View>
            </Pressable>
        )
    }
    if (loading) {
        return (
            <ActivityIndicator size={"large"} color={"purple"}/>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Dr. Developer!</Text>
            <Text style={styles.titleQuestion}>Choose your mcq test:</Text>
            <FlatList
                data={quizzes}
                keyExtractor={item => item.id.toString()}
                renderItem={renderQuizItem}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
            />

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'blueviolet',
        paddingHorizontal: 10,
    },

    title: {
        fontSize: 32,
        color: 'white',
        padding: 20,
    },

    titleQuestion: {
        fontSize: 20,
        paddingBottom: 10,
        color: 'yellow',
    },

    quizElement: {
        flex: 1,
        paddingHorizontal: 5,
        marginBottom: 20,
    },

    card: {
        backgroundColor: 'cadetblue',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        flex: 1,
        margin: 5,
    },

    quizTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'black',
    },

    quizImage: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 10,
    },

    questions: {
        fontSize: 12,
        color: 'black',
        marginTop: 5,
    },
    columnWrapper: {
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
});
export default HomeScreen
