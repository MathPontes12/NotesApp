import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { TasksContext } from "./taskProvider";
import { router } from "expo-router";


export default function Task() {

    const context = useContext(TasksContext)

    const alert = (id) => {
        Alert.alert('Tem certeza que deseja excluir a tarefa?', '', [
      {
        text: 'Cancel',
        
      },
      {text: 'OK', onPress: () => context.exclude(id)},
    ]);
    }

    return (
        <View style={styles.page}>
            {context.task.map((item) => (
                <View style={styles.container} key={item.id}>
                    <Text style={styles.text} numberOfLines={1}>
                        {item.title}
                    </Text>
                    <View style={styles.icons}>
                        <Pressable onPress={() => context.favorite(item)}>
                            <Ionicons name={item.isFavorite ? 'heart-sharp' : 'heart-outline' } size={30} color={'#f55050ff'} />
                        </Pressable>
                        <Pressable onPress={() => router.navigate({ pathname: `/editTask/${item.id}`, 
                            params: {title: item.title, text: item.text}})}>
                        <Ionicons name="create-outline" size={30} color={'#f55050ff'} />
                        </Pressable>
                        <Pressable onPress={() => alert(item.id)}>
                            <Ionicons name="trash" size={30} color={'#f55050ff'} />
                        </Pressable>
                    </View>
                </View>
            ))}

        </View>



    )
}

const styles = StyleSheet.create({
    page: {
        gap: 26,
        paddingLeft: 40,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#FBF6EC',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderWidth: 1
    },
    text: {
        paddingLeft: 10,
        fontSize: 20,
        color: '#0077ffff',
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
    icons: {
        paddingLeft: 10,
        flexDirection: 'row',
        gap: 15
    }
})