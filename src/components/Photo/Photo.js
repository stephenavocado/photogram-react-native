import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { sample_photos } from "./sample_photos/photos";
import { AntDesign } from '@expo/vector-icons';

function Photo({ photo }) {
    const sampleImage = sample_photos.find(sample_photo => sample_photo.id === photo.image);

    return (
        <View style={styles.photo}>
            <Text style={styles.username}>{photo.owner.username}</Text>
            <View style={styles.imageWrapper}>
                <Image 
                    style={styles.image}
                    source={sampleImage.src}
                />
            </View>
            <View style={styles.likes}>
                <AntDesign name="hearto" color="deeppink" />
                <Text style={styles.likesCount}>
                    {photo.likes_count} {photo.likes_count === 1 ? "like" : "likes"}
                </Text>
            </View>
            <Text style={styles.caption}>{photo.caption}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    photo: {
        padding: 16,
        marginVertical: 8,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'gainsboro',
        width: '100%'
    },
    imageWrapper: {
        height: 225,
        marginVertical: 12,
        marginLeft: -16,
        marginRight: -16,
    },
    image: {
        height: '100%',
        width: '100%',
    },
    username: {
        fontWeight: '700'
    },
    likes: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    likesCount: {
        marginLeft: 6,
    },
    caption: {
        marginTop: 12,
    }
})

export default Photo;