import { router } from "expo-router";
import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

// CRIA O CONTEXTO
export const TasksContext = createContext()

export function TasksProvider({ children }) {

    //ARMAZENA OS VALORES DE TITULO, TEXTO E A LISTA DE TAREFAS
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [task, setTask] = useState([])
    const [favoriteTask, setFavoriteTask] = useState([])


    // CARREGA AS TAREFAS QUANDO ABRE O APP
    useEffect(() => {
        const loadTasks = async () => {
            try {
                const savedTasks = await AsyncStorage.getItem('@tasks');
                const savedFavorites = await AsyncStorage.getItem('@favoriteTasks');
                if (savedTasks) setTask(JSON.parse(savedTasks));
                if (savedFavorites) setFavoriteTask(JSON.parse(savedFavorites));
            } catch (error) {
                console.error('Erro ao carregar as tarefas', error);
            }
        };
        loadTasks();
    }, []);

    // SALVA AS TAREFAS NO APP
    useEffect(() => {
        AsyncStorage.setItem('@tasks', JSON.stringify(task));
    }, [task]);

    useEffect(() => {
        AsyncStorage.setItem('@favoriteTasks', JSON.stringify(favoriteTask));
    }, [favoriteTask]);



    // AO SALVAR VAI PRA PAGINA DE TAREFAS, CRIA A NOVA TAREFA, ADD OS VALORES ARMAZENADOS NELA COM UM ID UNICO
    // ADD NA LISTA A NOVA TAREFA PRESERVANDO A LISTA ANTIGA TBM
    // LIMPA OS CAMPOS
    const save = () => {
        router.navigate('/main')
        const newTask = {
            id: Date.now(),
            title,
            text,
            isFavorite: false
        }
        setTask((listaAnterior) => [...listaAnterior, newTask])
        setTitle('')
        setText('')
    }

    // ACHA NA LISTA DE TAREFAS A TAREFA CLICADA COMPARANDO OS IDS E MUDA OS VALORES DE TITLE E TEXT
    // FAZ O MESMO PARA ATUALIZAR A TAREFA NA LISTA DE FAVORITOS
    const edit = (id, titleEdited, textEdited) => {
        router.navigate('/main')
        const listaAtualizada = task.map((item) =>
            item.id.toString() === id.toString() ? { ...item, title: titleEdited, text: textEdited } : item
        )
        setTask(listaAtualizada)
        const listaFavoritaAtualizada = favoriteTask.map((item) =>
            item.id.toString() === id.toString() ? { ...item, title: titleEdited, text: textEdited } : item
        )
        setFavoriteTask(listaFavoritaAtualizada)
    }

    // FILTRA A LISTA CRIANDO UMA NOVA Q N TENHA AQUELA TAREFA LOCALIZADA PELO ID, QUE FOI PASSADO POR PARAMETRO
    const exclude = (id) => {
        const listaAtualizada = task.filter((item) => item.id !== id)
        setTask(listaAtualizada)
    }



    const excludeFavorite = (taskSelected) => {

        // TIRA DA LISTA DE FAVORITOS
        const listaFavoritaAtualizada = favoriteTask.filter((item) => item.id !== taskSelected.id)
        setFavoriteTask(listaFavoritaAtualizada)

        // IDENTIFICA COMO FALSO O ITEM
        setTask(task.map((item) =>
            item.id.toString() === taskSelected.id.toString()
                ? { ...item, isFavorite: false }
                : item
        ));

    }

    const favorite = (taskSelected) => {

        if (taskSelected.isFavorite === false) {
            //ADD NA LISTA DE FAVORITOS
            setFavoriteTask((listaAnterior) => [...listaAnterior, taskSelected])

            // IDENTIFICA COMO TRUE O ITEM
            setTask(task.map((item) =>
                item.id.toString() === taskSelected.id.toString() ? { ...item, isFavorite: true } : item
            )
            );

        } else {
            excludeFavorite(taskSelected)
        }
    }

    return (

        <TasksContext.Provider value={{ title, setTitle, text, setText, save, task, exclude, edit, favorite, favoriteTask, excludeFavorite }}>
            {children}
        </TasksContext.Provider>

    )
}