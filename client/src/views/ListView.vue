<template>
  <b-container fluid>
    <b-row class="text-center mt-4 pb-4 border-bottom">
      <b-col sm="4">
        <label>Action</label>
        <div>
          <select v-model="actionSelected">
            <option :value="null">Any</option>
            <option
              v-for="item in getTypeList('action')"
              :value="item"
              :key="item"
            >{{item}}</option>
          </select>
        </div>
      </b-col>
      <b-col sm="4">
        <label>Dish</label>
        <div>
          <select v-model="dishSelected">
            <option :value="null">Any</option>
            <option
              v-for="item in getTypeList('dish')"
              :value="item"
              :key="item"
            >{{item}}</option>
          </select>
        </div>
      </b-col>
      <b-col sm="4">
        <label>Station</label>
        <div>
          <select v-model="stationSelected">
            <option :value="null">Any</option>
            <option
              v-for="item in getTypeList('station')"
              :value="item"
              :key="item"
            >{{item}}</option>
          </select>
        </div>
      </b-col>
    </b-row>

    <list-item :data="getFilteredList" />
  </b-container>
</template>

<script>
  import { mapState } from "vuex";
  import { isEmpty } from "lodash";
  import ListItem from "../components/ListItem";

  export default {
    components: {
      "list-item": ListItem
    },
    data() {
      return {
        actionSelected: null,
        dishSelected: null,
        stationSelected: null
      };
    },
    computed: {
      ...mapState({
        actions: state => state.actionsData.actions,
        isLoading: state => state.actionsData.isLoading
      }),
      getFilteredList() {
        let list = this.actions.filter(
          a =>
            a.action == this.actionSelected ||
            a.dish == this.dishSelected ||
            a.station == this.stationSelected
        );
        return !isEmpty(list) ? list : this.actions;
      }
    },
    methods: {
      getTypeList(prop) {
        return [...new Set(this.actions.map(item => item[prop]))];
      }
    }
  };
</script>

<style scoped>
  label {
    font-size: 10px;
    margin-bottom: 0;
  }

  select {
    width: 50%;
    font-size: 12px;
  }
</style>
