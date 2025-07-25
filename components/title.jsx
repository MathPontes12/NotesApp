import { useFonts } from "expo-font";
import { StyleSheet, Text } from "react-native";


export default function Title() {

   const [fontsLoaded] = useFonts({
      'Pacifico': require('../assets/fonts/Pacifico-Regular.ttf'),
    });
  
    if (!fontsLoaded) {
      return null; // Ou um componente de loading
    }

  return(
        <Text style={styles.title}>
          Notes
        </Text>
    )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 82,
    color: '#f55050ff',
    fontFamily: 'Pacifico'
  }
})