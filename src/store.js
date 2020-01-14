import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        tasks: [],
        completed: [],
        tempTask: {
                   title: '',
                   description: '',
                   completed: false,
                   due: '',
                   id: ''
               },
        taskCounter: 0
    },
    mutations: {
        addTask(state, task) {
            state.tasks.push(task);
        },
        updateTask(state, task) {
            let newTask = task;
            //set the old task to the new task by finding its index
            Vue.set(state.tasks, state.tasks.findIndex(task => task.id == newTask.id), newTask);
        },
        deleteTask(state, task) {
            //remove the step in a way vue understands
            state.tasks.splice(state.tasks.findIndex(item => item.id == task.id), 1);
        },
        completeTask(state, task) {
            let completedTask = state.tasks.splice(state.tasks.findIndex(item => item.id == task.id), 1);
            completedTask.completed = true;
            state.completed.push(completedTask[0]);
        },
        deleteCompletedTask(state, task) {
            //remove the step in a way vue understands
            state.completed.splice(state.completed.findIndex(item => item.id == task.id), 1);
        },
    },
    getters: {

    }
})