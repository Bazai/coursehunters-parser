// const url =

// const list = document.getElementById("lessons-list");

// const items = list.children;

// const url = items[0].querySelector("link[itemprop='contentUrl'");

const url = "https://coursehunters.net/course/geekbrains-wordpress";
const axios = require("axios");
const cheerio = require("cheerio");
let jsonframe = require("jsonframe-cheerio");

var companiesList = [];

axios
  .get(url) // HTTP request to https://www.producthunt.com
  .then(
    response => {
      // Success case

      console.log(response.status);
      if (response.status === 200) {
        // If HTTP Response is 200 - All good
        let html = response.data; // Setting the reponse.data to html
        let $ = cheerio.load(html);
        // jsonframe($);

        $("#lessons-list li").each(function(index, element) {
          let item = $(element).find("link[itemprop=url]").attr("href");
          // console.log(index, item);
          companiesList.push(item);
        });
        const command = `axel -a -n 10 ${companiesList.join(" ")}`;
        console.log(command);
      } // to make things clear
    },
    error => {
      console.log("Humm: ", error); // Shouldn't be triggered ;)
    }
  );
