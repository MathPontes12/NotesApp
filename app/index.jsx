import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import Title from "../components/title";
import { router } from "expo-router";

export default function Index() {

  return (
    <ImageBackground style= {styles.background} source={require('../assets/images/Background.png')} resizeMode="cover">
      <View style={styles.container}>
        <Title/>
          <Pressable style={styles.button} onPress={() => router.navigate('/main')}>
            <Text style={styles.textButton}>
              Entrar
            </Text>
          </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
    gap: 120
  },
  button: {
    backgroundColor: '#5c5c5cff',
    borderRadius: 20,
    padding: 12,
    width: 150,
    marginTop: 50
  },
  textButton: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center'
  }
})