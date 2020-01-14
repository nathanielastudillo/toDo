<template>
<div id="taskBody">
    <div id="taskTitle">
        <div>
        <v-text-field dense label='Title' dark color='white' outlined style='width: 450px; color: white!important;'
        full-width width='100%' v-if='editMode'
        v-model="task.title"> </v-text-field>
        <h2 v-else> {{task.title}} </h2>
        </div>
        <div id='taskButtons'>
        <v-btn @click='saveTask' v-if='editMode' style='margin-right: 5.57%;' color='green' dark> Save </v-btn>
        <v-btn @click='editMode = true' v-else color='blue' style='margin-right: 3.4%;' dark> Edit </v-btn>
        <v-btn @click='deleteTask' color='red' style='margin-left: 3.4%;' dark> Delete </v-btn>
             <v-btn v-if='!editMode' @click='completeTask' color='green' style='margin-left: 5.57%;
             margin-right: 10%' dark> Complete </v-btn>
        </div>
    </div>
    <div id="taskDescription">
        <v-textarea dense v-model="task.description" label='Description' outlined dark :rows='2' auto-grow v-if='editMode'> </v-textarea>
        <p v-else> {{task.description}} </p>

         <v-dialog v-if="editMode"
          v-model='dueDateDialog'
          persistent
          min-width='300px'
          max-width='340px'
          transition="scale-transition"
          style='margin-top: 3.4%;'
        >
          <template v-if="editMode" v-slot:activator="{ on }">
            <v-text-field
            v-if="editMode"
            dark
            dense
            color='white'
              v-model="task.dueDate"
              outlined
              hint="The date this task is due."
              label="Due Date"
              prepend-icon="mdi-calendar"
              readonly
              v-on="on"
            ></v-text-field>
            
          </template>
            
            <v-date-picker
          v-model='task.dueDate'
          type='date'
          :min='currentDate'
          header-color="#2196f3"
          style='margin-left: auto;
          margin-right: auto;'
          reactive
          id='d8'
          
          color="#6ab9fa">
          <v-spacer></v-spacer>
            <v-btn text color="blue" dark @click="dueDateDialog = false">Cancel</v-btn>
            <v-btn text color="blue" dark @click="dueDateDialog = false">OK</v-btn>
          </v-date-picker>
        </v-dialog>
        <p id='dueDate' v-if="!editMode">Due: {{task.dueDate}} </p>
        
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'task',
  props: ['id', 'edit'],
  data() {
    return {
      editMode: true,
      task: {
          title: '',
          description: '',
          dueDate: '',
          completed: false,
          id: ''
      },
      test: '',
      dueDateDialog: false
    }
  },
  methods: {
      saveTask() {
          this.editMode = false;
          this.$store.commit('updateTask', this.task);
      },
      deleteTask() {
          this.$store.commit('deleteTask', this.task);
      },
      completeTask() {
          this.$store.commit('completeTask', this.task);
      }
  },
  computed: {
      ...mapState(["tasks"]),

      currentDate: function () {
        let today = new Date();
        //subtract 1 day to allow same-day events
        today.setDate(today.getDate() -1);
        //add 1 to getMonth bc it's zero-indexed
        let currentDate = today.toISOString().slice(0,10);
        return  currentDate;
    }

    },
  mounted() {
      this.task = this.tasks.find(task => task.id == this.id);
  }
};
</script>

<style scoped>
#taskBody {
    background-color: #6ab9fa;
    display: grid;
    grid-template-rows: 0.1fr 0.8fr;
    overflow: hidden;
    min-height: auto;
    max-height: 16rem;
    margin-top: 2.12%;
    color: white!important;
    border-radius: 20px;
    padding: 3.4%;
}
#taskTitle {
    display: flex;
    justify-content: space-between;
    max-width: 100%;
}
#taskButtons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 2.12%;
    margin-right: 2.12%;
}
#taskDescription {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: space-around;
}
#dueDate {
    margin-bottom: -0.5%;
}
</style>
