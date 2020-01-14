<template>
<div class='elevation-1' id="toDoBody">
    <div id="toDoHead">
        <h2 color='white'> Tasks </h2> <v-btn width='150' @click='addTask' color='green' dark> Add </v-btn>
    </div>
    <div id="toDoContent">
        <div id='message' v-if='this.tasks.length < 1'>
        <p v-if='this.tasks.length < 1'> Nothing to do yet! </p>
        </div>
        <task transition="fade-transition" class='elevation-5' :id='task.id' :key='task.id' v-for='task in this.tasks'> </task>
        <h3 style='color: white; margin-top: 2.12%;' v-if='completed.length >= 1'> Completed </h3> 
        <completed-task transition="fade-transition" class='elevation-1' :edit='false' :id='task.id' :key='task.id' v-for='task in this.completed'> </completed-task>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import task from './task.vue';
import completedTask from './completedTask.vue';

export default {
  name: 'toDo',
  components: {
      task,
      completedTask
  },
  data () {
    return {
      test: 'test'
    }
  },
  methods: {
      addTask () {
          let task = {
              title: '',
              description: '',
              completed: false,
              due: '',
              id: this.tasks.length + Math.random(),
          };
          this.$store.commit('addTask', task);
      }
  },
  computed: {
      ...mapState(["tasks", "completed"])
  }
};
</script>

<style scoped>
#toDoBody {
  background-color: #2196f3;
  display: grid;
  grid-template-rows: 0.1fr 1fr;
  height: 80vh;
  width: 80%;
  margin: auto;
  margin-top: 3.4%;
  border-radius: 20px;
}
#toDoHead {
    height: 100%;
    padding: 3.4%;
    border-bottom-style: solid;
    border-bottom-color: lightgray;
    border-bottom-width: 1px;
    display: flex;
    justify-content: space-between;
    color: white;
}
#toDoContent {
    height: 100%;
    padding: 3.4%;
    overflow-x: hidden;
    overflow-y: scroll;
}
#message {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: white;
}
</style>
