export default {
  increment (state) {
    state.count++
  },
  // http://iwenwiki.com/api/blueberrypai/getChengpinInfo.php
  getChengpinInfo (state, data) {
    state.chengpinInfo = data
  }
}