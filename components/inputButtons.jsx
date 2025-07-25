import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";


export default function InputButtons({ save }) {


    return (
        <View style={styles.containerButtons}>
            <Pressable>
                <Text style={styles.saveButton} onPress={save}>
                    Salvar
                </Text>
            </Pressable>
            <Pressable onPress={() => router.navigate('/main')}>
                <Text style={styles.cancelButton}>
                    Voltar
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    containerButtons: {
        gap: 20,
        paddingTop: 20,
        alignItems: 'center'
    },
    saveButton: {
        padding: 10,
        fontSize: 21,
        backgroundColor: '#72b2faff',
        color: '#fff',
        borderRadius: 10,
        width: 200,
        textAlign: 'center'
    },
    cancelButton: {
        padding: 10,
        fontSize: 21,
        backgroundColor: '#72b2faff',
        color: '#fff',
        borderRadius: 10,
        width: 160,
        textAlign: 'center'
    }
})