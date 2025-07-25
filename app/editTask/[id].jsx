import { SafeAreaView, StyleSheet } from "react-native";
import { useContext, useEffect, useState } from "react";
import InputFields from "../../components/input";
import InputButtons from "../../components/inputButtons";
import { useLocalSearchParams } from "expo-router";
import { TasksContext } from "../../components/taskProvider";


export default function EditTask() {

    // ESTADO PRA CONTROLAR O TITULO E TEXTO EDITADO
    const [editedTitle, setEditedTitle] = useState('')
    const [editedText, setEditedText] = useState('')

    // CHAMA O CONTEXTO E FILTRA NA LISTA GERAL TASK A TAREFA QUE CORRESPONDE A QUE FOI PRESSIONADA PRA EDITAR (INDICADA PELO PARAMS)
    const context = useContext(TasksContext)
    const params = useLocalSearchParams()
    const taskNew = context.task.find(item => item.id.toString() === params.id.toString())

    // MUDA O ESTADO PARA ARMAZENAR OS VALORES ANTIGOS NO CAMPO PRA EDIÇAO
    useEffect(() => {
        if (taskNew) {
            setEditedTitle(taskNew.title);
            setEditedText(taskNew.text);
        }
    }, [taskNew]);

    return (
        // MOSTRA NOS CAMPOS OS VALORES ANTIGOS PRA EDITAR
        // AO SALVAR PASSA OS PARAMETROS DE ID, E OS VALORES EDITADOS
        <SafeAreaView style={styles.page}>
            <InputFields title={editedTitle} setTitle={setEditedTitle} text={editedText} setText={setEditedText} />
            <InputButtons save={() => context.edit(params.id, editedTitle, editedText)} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 50,
        marginTop: 30,
        marginBottom: 40,
        gap: 40
    }
})