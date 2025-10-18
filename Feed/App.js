import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';

import Menu from './components/Menu';
import Profile from './components/Profile';
import Like from './components/Like';
import BulleCommentaire from './components/BulleCommentaire';


export default function App() {

  return (


    <View style={styles.container}>

      <Menu />
 
        <View style={styles.bulleCommentaire}>
          <Profile nom="Quelqu'un" photo='Feed/images/img1.jpg' heure="20 min" />
          <BulleCommentaire commentaire="Proverbe (du latin proverbium) = court énoncé devenu d'usage commun et exprimant un conseil populaire, une vérité de bon sens ou d'expérience (par exemple : rien ne sert de courir, il faut partir à point)." />
          <Like />
        </View>

        <View style={styles.bulleCommentaire}>
          <Profile nom="Quelqu'un d'autre" photo="O" heure="15 min" />
          <BulleCommentaire commentaire="Une définition sert à caractériser « quelque chose ». Cette « chose » peut être un objet, un phénomène, un état, un concept abstrait, un mot, une expression ou toute autre chose qui présente un intérêt et qui est un point de discussion." />
          <Like />
        </View>

        <View style={styles.bulleCommentaire}>
          <Profile nom="Encore quelqu'un" photo="O" heure="10 min" />
          <BulleCommentaire commentaire="La faim désigne la sensation, apparaissant après un certain temps sans manger, qui pousse un être vivant à rechercher de la nourriture." />
          <Like />
        </View>

        

      </View>
      

    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccccccff',
    alignItems: 'flex',
    justifyContent: 'auto',
    padding: 15,
    paddingHorizontal: 20,
  },

  bulleCommentaire: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  
});