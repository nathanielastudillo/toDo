<template>
  <v-app>
    <v-app-bar
      app
      color="blue"
      dark
      style='margin-bottom: 3.4%;'
    >
    To-Do List by Nathaniel Astudillo
    </v-app-bar>

    <v-content>
      <to-do>
      </to-do>
    </v-content>
  </v-app>
</template>

<script>
import toDo from './components/toDo';
import task from './components/task';
import { mapState } from 'vuex'

export default {
  name: 'App',

  components: {
    toDo,
    task
  },

  data: () => ({
    //
  }),
  computed: {
    ...mapState(["tasks"]),
  }
};
</script>
<style>
body, html {
  max-height: 100vw;
  overflow: hidden;
}
</style>
