new Vue({
  data: {
    results: []
  },
  mounted () {
    axios
    .get("@/assets/73/committees.json")
    .then(response => {this.results = response})
  }
});
