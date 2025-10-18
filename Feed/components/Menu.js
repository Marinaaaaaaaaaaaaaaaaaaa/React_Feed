import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function Like() {

  const [active, setActive] = useState('abonnements');

  return (

    <View style={styles.navigation}>
        <TouchableOpacity style={styles.tab} onPress={() => setActive('abonnements')}>
          <Text style={styles.menuText}>Abonnements</Text>
          {active === 'abonnements' && <View style={styles.underline} />}
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab} onPress={() => setActive('explorer')}>
          <Text style={styles.menuText}>Explorer</Text>
          {active === 'explorer' && <View style={styles.underline} />}
        </TouchableOpacity>
      </View>
    

  );
}

const styles = StyleSheet.create({
    navigation: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 30,
    marginRight: 30,
  },
  tab: {
    alignItems: 'center',
    marginHorizontal: 40,
  },
  menuText: {
    fontSize: 16,
    color: '#000000ff',
    fontWeight: '500',
  },
  underline: {
    marginTop: 8,
    height: 3,
    width: 70,
    borderRadius: 2,
    backgroundColor: '#000000ff',
  }
});