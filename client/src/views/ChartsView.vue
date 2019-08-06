<template>
  <b-container fluid>
    <b-row class="text-center mt-4 pb-5">
      <b-col>
        {{durationFilter.reduce((a, b) => a + b, 0).toFixed(4)}}
        <div class="stats-text">Duration</div>
      </b-col>
      <b-col>
        {{durationFilter.reduce((a, b) => a + b, 0).toFixed(4) / durationFilter.length}}
        <div class="stats-text">Avg. Duration</div>
      </b-col>
      <b-col>
        {{actions.length}}
        <div class="stats-text">Count</div>
      </b-col>
    </b-row>

    <b-row>
      <b-col sm="6">
        <doughnut-chart :chart-data="chartData('action')" :options="options"></doughnut-chart>
      </b-col>
      <b-col sm="6">
        <doughnut-chart :chart-data="chartData('station')" :options="options"></doughnut-chart>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="6">
        <doughnut-chart :chart-data="chartData('dish')" :options="options"></doughnut-chart>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import { mapState } from "vuex";
  import DoughnutChart from "../components/DoughnutChart";
  import randomColor from "randomcolor";

  export default {
    components: { DoughnutChart },
    data() {
      return {
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            animateRotate: true
          }
        }
      };
    },
    computed: {
      ...mapState({
        actions: state => state.actionsData.actions
      }),
      durationFilter() {
        return this.actions.map(a => a.duration);
      }
    },
    methods: {
      chartData(prop) {
        let mapPropToCount = this.actions
          .map(a => a[prop])
          .reduce(function(obj, b) {
            obj[b] = ++obj[b] || 1;
            return obj;
          }, {});

        let labels = [];
        let dataset = [];
        for (let item in mapPropToCount) {
          labels.push(item.toUpperCase());
          dataset.push(mapPropToCount[item]);
        }

        return {
          labels: labels,
          datasets: [
            {
              backgroundColor: randomColor({ count: labels.length }),
              data: dataset
            }
          ]
        };
      }
    }
  };
</script>

<style scoped>
  .stats-text {
    font-size: 12px;
  }
</style>
