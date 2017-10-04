const url = "https://coursehunters.net/course/geekbrains-wordpress";
let item;

fetch(url)
  .then(res => {
    return res.text();
  })
  .then(body => {
    let responseHTML = document.createElement("html");

    responseHTML.innerHTML = body;

    const inputs = responseHTML.querySelectorAll("#lessons-list li");

    Object.keys(inputs).map(element => {
      item = element.find("link[itemprop=url]").attr("href");
      console.log(item);
    });
  });
