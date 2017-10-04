const url = "https://coursehunters.net/course/geekbrains-wordpress";

const parseResponseVideos = body => {
  let responseHTML = document.createElement("html");
  responseHTML.innerHTML = body;

  const inputs = responseHTML.querySelectorAll("#lessons-list li");

  const items = Object.keys(inputs).map(element => {
    let elementHTML = document.createElement("div");
    elementHTML.innerHTML = inputs[element].innerHTML;
    let item = elementHTML
      .querySelector("link[itemprop=url]")
      .getAttribute("href");
    return item;
  });
  return items;
};

let app = new Vue({
  el: "#app",
  data: {
    links: {
      loading: false,
      data: []
    },
    url: "https://coursehunters.net/course/geekbrains-wordpress"
  },
  methods: {
    getData() {
      this.links.loading = true;
      this.links.data = [];
      this.$http.get(this.url).then(
        response => {
          this.links.loading = false;
          this.links.data = parseResponseVideos(response.body);
        },
        response => {
          // error callback
        }
      );
    }
  }
});
