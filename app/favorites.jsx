import { FlatList, ImageBackground, Pressable, SafeAreaView, StyleSheet, Text } from "react-native";
import Title from "../components/title";
import FavoriteList from "../components/favoriteList"
import { router } from "expo-router";


export default function Main() {

    return (
        //SAFEAREAVIEW PERMITE Q O REACT FAÇA UMA MARGEM PARA VISUALIZAÇAO DE ACORDO COM O CELULAR
        <ImageBackground style={styles.background} source={require('../assets/images/Background.png')} resizeMode="cover">
            <SafeAreaView style={styles.page}>
                <Title />
                <FlatList
                    style={styles.container}
                    ListHeaderComponent={
                        <FavoriteList />
                    }
                />
                <Pressable onPress={() => router.navigate('/main')}>
                    <Text style={styles.textButton}>
                        Lista de Tarefas
                    </Text>
                </Pressable>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 70
    },
     background: {
        flex: 1
    },
    container: {
        flex: 1,
        width: '95%',
        paddingVertical: 40,
        paddingHorizontal: 10,
    },
    text: {
        fontSize: 21
    },
    textButton: {
        padding: 10,
        fontSize: 21,
        backgroundColor: '#72b2faff',
        color: '#fff',
        borderRadius: 10,
        width: 200,
        textAlign: 'center'
    },
})