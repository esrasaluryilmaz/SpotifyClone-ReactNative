import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Error = ({albumsError}) => {
  return (
    <View>
      {albumsError && albumsError.message ? (
        <Text>{albumsError.message}</Text>
      ) : (
        <Text>Bilinmeyen bir hata oluştu.</Text>
      )}
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({});
