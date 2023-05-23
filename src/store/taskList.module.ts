import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

export interface Task {
    id: string;
    title: string;
    body: string;
    isDone: boolean;
    createdDate: string
}

const initialState: Task[] = [
    {
        id: new Date().toUTCString(),
        title: 'Finish todo list',
        body: "make beautiful ui for todo list",
        isDone: false,
        createdDate: new Date().toUTCString()
    }
];


export const taskListSlice = createSlice({
    name: 'taskList',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<{title: string,body: string}>) => {
            const newTask: Task = {
                id: new Date().toUTCString(),
                title: action.payload.title,
                body: action.payload.body,
                isDone: false,
                createdDate: new Date().toUTCString()
            }
            state.unshift(newTask);
        },

        removeTask: (state, action: PayloadAction<string>) => {
            state = state.filter((task) => task.id !== action.payload);
        },

        updateTaskStatus: (state, action: PayloadAction<{id: string ,isDone: boolean}>) => {
            const index = state.findIndex((task) => task.id === action.payload.id)
            state[index].isDone = action.payload.isDone 
        }
    },

});

export const { removeTask, addTask, updateTaskStatus } = taskListSlice.actions;

export const taskSelector = (state: RootState) => state.taskList;

export default taskListSlice.reducer;
