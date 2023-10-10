import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MainContainer from './src/MainContainer';

const apiUrl = 'http://192.168.0.113:3000';

const App: React.FC = () => {
  const [data, setData] = useState<any>(null);

  // Function to fetch all food items
  const getAllFoodItems = () => {
    // Make a GET request to the /food/all endpoint
    fetch(`${apiUrl}/food/all`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          // Handle the data (an array of food items)
          console.log(data);
          setData(data);
          // You can now display the data in your frontend
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  }

  // Call the function to fetch all food items when the component mounts
  useEffect(() => {
    getAllFoodItems();
  }, []); // Empty dependency array to run this effect only once on component mount

  return (
      <View style={styles.container}>
        <MainContainer />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
