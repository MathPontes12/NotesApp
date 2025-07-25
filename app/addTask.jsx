import { SafeAreaView, StyleSheet } from "react-native";
import { useContext } from "react";
import { TasksContext } from "../components/taskProvider";
import InputFields from "../components/input";
import InputButtons from "../components/inputButtons";


export default function AddTask() {

    const context = useContext(TasksContext)

    return (
        <SafeAreaView style={styles.page}>
            <InputFields title={context.title} setTitle={context.setTitle} text={context.text} setText={context.setText}/>
            <InputButtons save={context.save}/>
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