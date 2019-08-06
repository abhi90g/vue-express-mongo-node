<template>
  <div>
    <ul style="list-style-type: none; padding-left: 0;">
      <li v-for="item in paginatedData" :key="item._id">
        <b-card style="border: none">
          <b-row>
            <b-col class="col-auto d-flex align-items-center pr-2">
              <div class="avatar-div">
                <span class="avatar-text">{{item.action[0].toUpperCase()}}</span>
              </div>
            </b-col>

            <b-col class="pl-0">
              <b-card-text>
                {{item.action.charAt(0).toUpperCase() + item.action.slice(1)}}
                <br />
                <div class="details">
                  <i class="material-icons">fastfood</i>
                  {{item.dish.toUpperCase()}}
                  <i
                    class="material-icons"
                  >location_on</i>
                  {{item.station.toUpperCase()}}
                  <br />
                  <i class="material-icons">access_time</i>
                  {{item.duration}}
                  <i
                    class="material-icons"
                  >calendar_today</i>
                  {{item.startTime.toUpperCase()}}
                </div>
              </b-card-text>
            </b-col>
          </b-row>
        </b-card>
      </li>
    </ul>
    <b-row>
      <b-col>
        <b-button variant="link" :disabled="pageNumber === 0" @click="prevPage">
          <i class="material-icons arrows">chevron_left</i>
          Previous
        </b-button>
      </b-col>
      <b-col class="align-self-sm-center" v-if="getPages().length > 0">
        <div class="text-center">{{getPages()[n]}} of {{data.length}}</div>
      </b-col>
      <b-col>
        <b-button
          variant="link"
          :disabled="pageNumber >= pageCount -1"
          @click="nextPage"
          class="float-right"
        >
          Next
          <i class="material-icons arrows">chevron_right</i>
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Array,
        required: true
      },
      size: {
        type: Number,
        required: false,
        default: 10
      }
    },
    data() {
      return {
        pageNumber: 0,
        n: 0
      };
    },
    computed: {
      pageCount() {
        let l = this.data.length,
          s = this.size;
        return Math.ceil(l / s);
      },
      paginatedData() {
        const start = this.pageNumber * this.size;
        const end = start + this.size;
        return this.data.slice(start, end);
      }
    },
    methods: {
      nextPage() {
        this.pageNumber++;
        this.n++;
      },
      prevPage() {
        this.pageNumber--;
        this.n--;
      },
      getPageStart(pageSize, pageNr) {
        return pageSize * pageNr;
      },

      getPageLabel(total, pageSize, pageNr) {
        const start = Math.max(this.getPageStart(pageSize, pageNr), 0);
        const end = Math.min(this.getPageStart(pageSize, pageNr + 1), total);

        return `${start + 1} to ${end}`;
      },
      getPages() {
        const itemsToShow = Array.from(
          { length: this.data.length },
          (_, i) => `Item ${i + 1}`
        );

        const pages = Array.from(
          { length: Math.ceil(itemsToShow.length / this.size) },
          (_, i) => this.getPageLabel(itemsToShow.length, this.size, i)
        );
        return pages;
      }
    }
  };
</script>

<style scoped>
  .card-body {
    padding-left: 0;
  }

  .avatar-div {
    border: 1px solid gray;
    text-align: center;
    border-radius: 50%;
    height: 50px;
    width: 50px;
  }

  .avatar-text {
    font-size: calc(50px / 2);
    line-height: 1;
    position: relative;
    top: calc(50px / 4);
  }

  .details {
    color: gray;
    font-size: smaller;
  }

  .material-icons {
    font-size: 14px;
    vertical-align: text-top;
  }

  .arrows {
    font-size: 20px;
  }
</style>
