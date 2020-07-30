import Axios from 'axios'
export default {
  updateCountAsync ({ commit }) {
    setInterval(() => {
      commit('increment')
    }, 1000)
  },
  async getChengpinInfoAsync ({ commit }) {
    const { data } = await Axios.get('http://iwenwiki.com/api/blueberrypai/getChengpinInfo.php')
      .then((res) => {
        return res
      })
    commit('getChengpinInfo', data.chengpinInfo)
  }
}