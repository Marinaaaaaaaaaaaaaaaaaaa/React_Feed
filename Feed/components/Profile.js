import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image, Modal, TextInput, Pressable } from 'react-native';

export default function Profile({nom, photo, heure}) {

    const source = photo && photo.startsWith('Feed/images/') ? photo : { uri: photo };
      const [modalVisible, setModalVisible] = useState(false);

  return (

    <View style={{ flexDirection: 'row', marginTop: 10}}>

        <View>
            <Image source={source} style={styles.photo} />
        </View>

        <View styles={styles.profile}>
                <Text style={styles.nom}>{nom}</Text>
                <Text style={styles.heure}>{heure}</Text>
        </View>


        <View style={{ marginLeft: 'auto' }}>  

            <TouchableOpacity style={styles.plus}>
                <Text style={styles.plusText} onPress={() => setModalVisible(true)}>...</Text>
            </TouchableOpacity>

            <Modal
                visible={modalVisible}
                transparent
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >

                <View style={[styles.btnAction, styles.commentaire2]}>
    

                    <Pressable style={[styles.btn, styles.btn2]} onPress={() => { setModalVisible(false);}}>
                        <Text style={[styles.btnText, styles.btn2Text]}>Enregistrer le commentaire</Text>
                    </Pressable>

                    <Pressable style={styles.btn} onPress={() => { setModalVisible(false);}}>
                        <Text style={styles.btnText}>Annuler</Text>
                    </Pressable>  


                </View>

            </Modal>
            

        </View>
        

    </View>
    

  );
}

const styles = StyleSheet.create({
    profile: {
        alignItems: 'center',
        flexDirection: 'row',

    },    
    photo: {
        marginLeft: 12,
    },
    nom: { 
        fontSize: 18,
        marginLeft: 35,
        fontWeight: '500',
    },
    heure: { 
        color: '#888888',
        marginLeft: 35,
    },
    plus: { 
        fontSize: 18,
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#cfcfcfff',
    },
    plusText: {
        color: '#ffffffff',
        textAlign: 'center',
        fontSize: 18,
        marginTop: -3 ,
    },
    commentaire2: {
      backgroundColor: '#fff',
      borderRadius: 12,
      border: '5px solid #000000ff',
      padding: 14,
      marginLeft: 'auto',
      marginRight: 'auto',
      height: 200,
      width: 400,
      justifyContent: 'center',
    },
    btnAction: {
      flexDirection: 'column',
      justifyContent: 'flex-end',
      marginBottom:'auto',
      marginTop: 'auto',
      marginBottom: 50,
    },
    btn: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 8,
      marginLeft: 8,
      backgroundColor: '#eee',
      marginTop: 10,
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