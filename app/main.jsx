import { FlatList, ImageBackground, Pressable, SafeAreaView, StyleSheet } from "react-native";
import Title from "../components/title";
import Task from "../components/task";
import { Ionicons } from "@expo/vector-icons";
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
                        <Task />
                    }
                />
                <Pressable style={styles.button} onPress={() => router.navigate('/addTask')}>
                    <Ionicons name="add-circle" size={80} color={'#72b2faff'} />
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
    button: {
        paddingTop: 15
    }
})