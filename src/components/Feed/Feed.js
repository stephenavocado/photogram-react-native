import React from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { axiosInstance } from "../../utils"; 

function Photo({ photo }) {
    return (
        <View style={styles.feed}>
            <Text>{photo.caption}</Text>
        </View>
    )
}

function Feed({ user }) {
    const [photos, setPhotos] = React.useState([]);

    async function getFeed() {
        try {
            const apiEndPoint = `/${user.username}/feed.json?user_email=${user.email}&user_token=${user.authentication_token}`
            const response = await axiosInstance.get(apiEndPoint)
            setPhotos(response.data);
        } catch(error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        getFeed()
    }, [])

    return (
        <SafeAreaView>
            <Text>Feed</Text>
            <FlatList
                data={photos}
                renderItem={({item}) => <Photo photo={item} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    feed: {
        gap: 8,
        marginTop: 8
    }
})

export default Feed;