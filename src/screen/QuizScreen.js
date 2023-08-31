import {View, Text, StyleSheet} from 'react-native'
import React, {useState, useEffect} from 'react'

const QuizScreen = ({route, navigation}) => {
    const [article, setArticle] = useState({});
    const [authorId, setAuthorId] = useState(null);
    const [author, setAuthor] = useState({});

    //se declanche 1 fois car [] vide
    useEffect(() => {
        //recupere parametres
        if (route.params.article) {
            setArticle(route.params.article);
            //permet de recuperer donné de l auteur
            setAuthorId(route.params.article.userId)
        }
    }, []);

    //se delcanche a chaque fois que authorId change
    useEffect(() => {
        //recupère les donnés de l'users
        const getAuthorData = () => {
            fetch("https://jsonplaceholder.typicode.com/users/" + authorId)
                .then((response) => response.json())
                .then((json) => {
                    setAuthor(json)
                });
        }
        //appel de la fonction
        getAuthorData();
    }, [authorId]);

    return (
        <View style={styles.container}>
            <Text>POST DETAILS</Text>
            <Text style={styles.postTitle}>{article.title}</Text>
            <Text>{article.body}</Text>
            <Text style={styles.postAuteur}>Auteur : {author?.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    postTitle: {
        fontWeight: 'bold'
    },
    postAuteur: {
        backgroundColor: 'yellow'
    }
});
export default QuizScreen
