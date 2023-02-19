import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function Photo({ photo }) {
    return (
        <View style={styles.photo}>
            <Text style={styles.username}>{photo.owner.username}</Text>
            <Image 
                style={styles.image}
                source={{ 
                    uri: photo.url
                }}
            />
            <Text>{photo.likes_count} {photo.likes_count === 1 ? "like" : "likes"}</Text>
            <Text style={styles.caption}>{photo.caption}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    photo: {
        padding: 20,
        marginVertical: 8,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'slategrey'
    },
    image: {
        height: 200,
        width: '100%'
    },
    username: {
        fontWeight: '700'
    },
    caption: {
        marginTop: 12,
    }
})

export default Photo;