<template>
  <b-container fluid>
    <div v-if="isLoading" class="text-center mt-lg-5">
      <b-spinner label="Loading..."></b-spinner>
    </div>

    <b-row v-else>
      <b-col sm="6">
        <ChartsView />
      </b-col>
      <b-col sm="6">
        <ListView />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import { mapState } from "vuex";
  import ListView from "./views/ListView";
  import ChartsView from "./views/ChartsView";

  export default {
    name: "app",
    components: {
      ListView,
      ChartsView
    },
    data() {
      return {
        errors: {}
      };
    },
    created() {
      this.$store.dispatch("actionsData/getAllActions").catch(err => {
        this.errors = err;
      });
    },
    computed: {
      ...mapState({
        isLoading: state => state.actionsData.isLoading
      })
    }
  };
</script>

<style scoped>
</style>
