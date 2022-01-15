var postObjects = [];

document.querySelector("#app").innerHTML = "";
const url = "https://jsonplaceholder.typicode.com";
const row = document.querySelector("#row");
if (row) row.innerHTML = `<h2>loading</h2>`;
var card = (title, content, article) => {
  return `        <div class="card col-md-3">
  <div class="card-body">
    <h5 class="card-title"> ${title.substring(0, 20)}</h5>
 
    <p class="card-text">
 ${content.substring(0, 70)}
    </p>
    <a href="/post.html?article=${article}" class="btn btnCard">Go somewhere</a>
  </div>
</div>`;
};

const loadmore = document.querySelector("#loadmore");
loadmore.innerHTML = `<div class="row justify-content-center" id='loadmore'>
<button onclick="load(4)&buttom()" id="butt" type="button" class="btn color">
<i class="bi bi-caret-down "></i class='btn btn-primary'> Load More</button>
</div>`;

function buttom() {
  setTimeout(() => {
    window.scroll({
      top: 3000,
      behavior: "smooth"
    });
  }, 500);
}

let i = 4;
let rand = 5;
rand = Math.floor(Math.random() * 11);
function load(x) {
  row.innerHTML = ``;
  x ? (i = i + x) : (i = i + 0);
  fetch(url + "/posts")
    .then((r) => r.json())
    .then((res) => {
      jumbo(res[rand]);
      res.slice(0, i).forEach((element, i) => {
        row.innerHTML += card(element.title, element.body, i);
      });
    });
}

// function load(x) {
//   row.innerHTML = ``;
//   x ? (i = i + x) : (i = i + 0);
//   postList.slice(0, i).forEach((element, i) => {
//     row.innerHTML += card(element.title, element.content, i);
//   });
// }

(async function () {
  await load(0);
})();
window.load = load;
window.buttom = buttom;
function jumbo(j) {
  document.querySelector("#jumbo").innerHTML = `  
      <h3 class="display-4">${j.title.slice(0, 10)}</h3>
  <p>
  ${j.title.slice(0, 100)}
  </p>
  <hr class="my-4" />
  <p>
  <a href="/post.html?article=${rand}" class="btn btnCard">Go somewhere</a>
  </p>`;
}
