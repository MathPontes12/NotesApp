import { StyleSheet, TextInput, View } from "react-native";

export default function InputFields({ title, setTitle, text, setText }) {

    return (
        <View style={styles.page}>
            <TextInput placeholder="Digite o Titulo da Tarefa" value={title} onChangeText={setTitle} maxLength={27}
                placeholderTextColor={'#b4b4b4ff'} style={styles.title} />
            <TextInput placeholder="Digite uma Tarefa"
                placeholderTextColor={'#b4b4b4ff'} scrollEnabled={true} value={text} onChangeText={setText}
                textAlign="top" multiline={true} style={styles.text} />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        gap: 20,
        width: '100%'
    },
    title: {
        borderWidth: 2,
        borderRadius: 10,
        width: '100%',
        fontSize: 21,
        padding: 8
    },
    text: {
        borderWidth: 2,
        borderRadius: 10,
        width: '100%',
        fontSize: 21,
        padding: 8,
        height: 300,
        textAlignVertical: 'top'
    },
    }
)