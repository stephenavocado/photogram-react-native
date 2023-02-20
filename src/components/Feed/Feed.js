import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { axiosInstance } from "../../utils"; 
import Photo from "../Photo";
import { AuthContext } from "../AuthProvider";

function Feed() {
    const { user } = React.useContext(AuthContext);
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

    function ListHeader() {
        return (
            <Text style={styles.title}>feed</Text>
        )
    }

    return (
        <View style={styles.feed}>
            <FlatList
                data={photos}
                renderItem={({item}) => <Photo photo={item} />}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.contentContainer}
                ListHeaderComponent={ListHeader}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    feed: {
        backgroundColor: 'white'
    },
    title: {
        fontSize: 28, 
        fontWeight: '600'
    },
    contentContainer: {
        padding: 12
    }
})

export default Feed;