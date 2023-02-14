import { Image, Text, View, StyleSheet } from 'react-native';

export default function Posts({ post }) {
    return(
        <View style={styles.post}>
            <Image style={styles.image} source={{uri: post.photo}} />
            <Text style={styles.title}>{post.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    post: {
        margin: 17.5,
        padding: 17.5,
        borderRadius: 5,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 2 }
    },
    image: {
        width: '100%',
        height: 333,
        borderRadius: 15
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})