import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ExploreScreen = () => {
    return (
      <View style={styles.container}>
        <Text>ExploreScreen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
