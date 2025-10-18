import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function BulleCommentaire({ commentaire}) {

    return (
        <View style={styles.bulleCommentaire}>
            <Text>{commentaire}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    bulleCommentaire: {
        padding: 15,
        borderRadius: 10,
    }

});