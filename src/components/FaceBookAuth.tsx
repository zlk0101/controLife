import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FaceBookAuth = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Continue with Facebook and accept terms</Text>
      <Text style={styles.text}>icon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingVertical: 10,
    borderRadius: 10,
    width: '80%',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {color: '#fff'},
});

export default FaceBookAuth;
