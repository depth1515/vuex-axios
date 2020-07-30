<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <h1>{{count}}</h1>
      <h1>{{ss}}</h1>
      <ul>
        <li
          v-for="(item,index) in data"
          :key="index"
        >
          {{item.title}}
        </li>
      </ul>
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  mounted () {
    // this.$store.dispatch('updateCountAsync')
    this.updateCountAsync()
    this.getChengpinInfoAsync()
  },
  methods: {
    ...mapActions([
      'updateCountAsync',
      'getChengpinInfoAsync'
    ]),
    ...mapMutations([
      'updateCount'
    ])
  },
  computed: {
    // count: (state) => state.count
    ...mapState({
      count: (state) => state.count,
      data: (state) => state.chengpinInfo
    }),
    ...mapGetters({
      'ss': 'fullName'
    })
  }
}
</script>
<style>
</style>
