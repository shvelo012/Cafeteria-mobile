import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainContainer from './src/MainContainer';


const [data, setData] = useState<any>();

const apiUrl = 'http://192.168.0.113:3000';
// Function to fetch all food items
function getAllFoodItems() {
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

// Call the function to fetch all food items
// getAllFoodItems();
const App: React.FC = () => {

  return (
    <View>
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
