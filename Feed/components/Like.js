import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View,  Modal, TextInput, Pressable } from 'react-native';

export default function Like() {

  const [liked, setLiked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [comment, setComment] = useState('');

  return (

    <View style={{ flexDirection: 'row'}}>

        <TouchableOpacity onPress={() => setLiked(!liked)}>
            <Text style={styles.like}>{liked ? '♥' : '♡'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.commentaire}>💬</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
            <Text style={styles.partage}>+</Text>
        </TouchableOpacity>

        <Modal
            visible={modalVisible}
            transparent
            animationType="fade"
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.ajoutCommentaire}>

                <View style={styles.commentaire2}>
                    <Text style={styles.titre}>Ajouter un commentaire</Text>
                    <TextInput
                        value={comment}
                        onChangeText={setComment}
                        placeholder="Écrire un commentaire..."
                        style={styles.input}
                        multiline
                    />

                    <View style={styles.btnAction}>
                        <Pressable style={styles.btn} onPress={() => { setModalVisible(false); setComment(''); }}>
                            <Text style={styles.btnText}>Annuler</Text>
                        </Pressable>    

                        <Pressable style={[styles.btn, styles.btn2]} onPress={() => { setModalVisible(false); setComment(''); }}>
                            <Text style={[styles.btnText, styles.btn2Text]}>Envoyer</Text>
                        </Pressable>
                    </View>
                </View>

            </View>

        </Modal>

    </View>
        

  );
}

const styles = StyleSheet.create({
    like: {
        fontSize: 18,
        marginLeft: 15,
        marginRight: 15,
    },
    commentaire: {
        fontSize: 18,
        marginLeft: 15,
        marginRight: 15,
    },
    partage: {
        fontSize: 18,
        marginLeft: 15,
        marginRight: 15,
    },
    ajoutCommentaire: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.35)',
      justifyContent: 'center',
      padding: 20,
    },
    commentaire2: {
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: 14,
    },
    titre: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 8,
    },
    input: {
      minHeight: 60,
      borderColor: '#eee',
      borderWidth: 1,
      borderRadius: 8,
      padding: 8,
      textAlignVertical: 'top',
      marginBottom: 12,
    },
    btnAction: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    btn: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 8,
      marginLeft: 8,
      backgroundColor: '#eee',
    },
    btn2: {
      backgroundColor: '#5b2f3b',
    },
    btnText: {
      color: '#333',
      fontWeight: '600',
    },
    btn2Text: {
      color: '#fff',
    },
});