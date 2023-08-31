import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = ({ route }) => {
    // For demonstration purposes, you can replace this with the actual user data
    const user = {
        email: 'dr-developer@god.com',
        profileImage: 'https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png', // Google user image URL
    };

    return (
        <View style={styles.container}>
            <Image style={styles.profileImage} source={{ uri: user.profileImage }} />
            <Text style={styles.emailText}>{user.email}</Text>
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
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
        resizeMode: 'cover',
    },
    emailText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ProfileScreen;
