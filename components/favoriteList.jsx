import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { TasksContext } from "./taskProvider";



export default function FavoriteList() {

    const context = useContext(TasksContext)

    return (
        
            <View style={styles.page}>
                {context?.favoriteTask?.map((item) => (
                    <View style={styles.container} key={item.id}>
                        <Text style={styles.text} numberOfLines={1}>
                            {item.title}
                        </Text>
                        <View style={styles.icons}>
                            <Pressable onPress={() => context.excludeFavorite(item)}>
                                <Ionicons name={'heart-sharp'} size={30} color={'#f55050ff'} />
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
        flex: 1,
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