import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
import { Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TasksProvider } from '../components/taskProvider';

export default function Layout() {

    return (
        // ESTRUTURA PRA EXIBIR O DRAWER
        <TasksProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Drawer
                    screenOptions={{
                        //MUDA TODO O ESTILO DO APPBAR
                        headerStyle: {
                            backgroundColor: '#FBF6EC',
                        },
                        //MUDA A COR DO TEXTO DO APP BAR
                        headerTintColor: '#f55050ff',
                        headerTitleStyle: {
                            fontWeight: 'bold'
                        },
                        //MUDA O ESTILO DO MENU DRAWER
                        drawerStyle: {
                            backgroundColor: '#FBF6EC',
                            paddingTop: 20,
                        },
                        //MUDA O ESTILO DO TEXTO DO MENU DRAWER
                        drawerLabelStyle: {
                            fontSize: 24,
                        },
                        // ESTILOS PARA ITEM ATIVO
                        drawerActiveTintColor: '#5c5c5cff',
                        drawerActiveBackgroundColor: '#FBF6EC',

                        // ESTILOS PARA ITEM INATIVO
                        drawerInactiveTintColor: '#cfcfcf',
                        drawerInactiveBackgroundColor: '#FBF6EC',
                    }}
                    // Permite alterar o conteudo do drawer
                    drawerContent={(props) => (
                        <DrawerContentScrollView>
                            <View style={{ paddingBottom: 60 }}>
                                <Text style={{ color: '#f55050ff', fontSize: 52, textAlign: 'center', fontFamily: 'Pacifico' }}>
                                    Notes
                                </Text>
                            </View>
                            <DrawerItemList {...props} />
                        </DrawerContentScrollView>
                    )}
                >
                    <Drawer.Screen
                        //TRABALHA CADA PAGINA SEPARADO PELO NOME
                        name='index'
                        options={{
                            // TIRA O APP BAR DA PAGINA
                            headerShown: false,
                            // TIRA DO DRAWER O MENU
                            drawerItemStyle: { display: 'none' }
                        }}

                    />
                    <Drawer.Screen
                        name='main'
                        options={{
                            // MUDA NO DRAWER O NOME
                            drawerLabel: 'Lista de Tarefas',
                            // MUDA NO APP O NOME
                            title: '',
                        }}
                    />
                    <Drawer.Screen
                        name='addTask'
                        options={{
                            drawerItemStyle: { display: 'none' },
                            title: 'Adicionar Tarefa',
                            headerTitleAlign: 'center'
                        }}
                    />
                    <Drawer.Screen
                        name='editTask/[id]'
                        options={{
                            drawerItemStyle: { display: 'none' },
                            title: 'Editar Tarefa',
                            headerTitleAlign: 'center'
                        }}
                    />
                    <Drawer.Screen
                        name='favorites'
                         options={{
                            drawerLabel: 'Favoritos',
                            title: 'Favoritos',
                            headerTitleAlign: 'center'
                        }}
                    />
                </Drawer>
            </GestureHandlerRootView>
        </TasksProvider>
    );
}
