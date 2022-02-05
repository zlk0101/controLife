import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GoogleAuth = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Continue with google</Text>
      <Text style={styles.text}>icon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    width: '90%',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {color: '#fff'},
});

export default GoogleAuth;
