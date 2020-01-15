<template>
<div id="taskBodyCompleted">
    <div id="taskTitleCompleted">
        <div>
        <h2> {{task.title}} </h2>
        </div>
        <v-btn dark @click='deleteCompletedTask'> Delete </v-btn>
    </div>
    <div id="taskDescriptionCompleted">
       
        <p> {{task.description}} </p>
        <p id='dueDateCompleted'>Due: {{task.dueDate}} </p>
        
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'completedTask',
  props: ['id'],
  data() {
    return {
      editMode: false,
      task: {
          title: '',
          description: '',
          dueDate: '',
          completed: false,
          id: ''
      }
    }
  },
  methods: {
      deleteCompletedTask() {
          this.$store.commit('deleteCompletedTask', this.task);
      }
  },
  computed: {
      ...mapState(["completed"]),
    },
  mounted() {
      this.task = this.completed.find(task => task.id == this.id);
  }
};
</script>

<style scoped>
#taskBodyCompleted {
    background-color: #929292;
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
#taskTitleCompleted {
    display: flex;
    justify-content: space-between;
    max-width: 100%;
}
#taskButtonsCompleted {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 2.12%;
    margin-right: 2.12%;
}
#taskDescriptionCompleted {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: space-around;
}
</style>
