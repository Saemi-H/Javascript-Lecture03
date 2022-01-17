// const container = document.getElementById('root');
// const ajax = new XMLHttpRequest();
// const content = document.createElement('div');
// const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
// const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

// function getData(url) {
//   ajax.open('GET', url, false);
//   ajax.send();

//   return JSON.parse(ajax.response);
// }

// const newsFeed = getData(NEWS_URL);
// const ul = document.createElement('ul');

// window.addEventListener('hashchange', function() {
//   const id = location.hash.substr(1);

//   const newsContent = getDat(CONTENT_URL.replace('@id', id))
//   const title = document.createElement('h1');

//   title.innerHTML = newsContent.title;

//   content.appendChild(title);
// });

// for(let i = 0; i < 10; i++) {
//   const div = document.createElement('div');

//   div.innerHTML =  `
//     <li>
//       <a href="#${newsFeed[i].id}">
//         ${newsFeed[i].title} (${newsFeed[i].comments_count})
//       </a>
//     </li>
//   `;

//   ul.appendChild(div.firstElementChild);
// }

// container.appendChild(ul);
// container.appendChild(content);


const ajax = new XMLHttpRequest();
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json' 


// create getData function
const getData =(url) =>{
  ajax.open('GET',url, false )
  ajax.send()
  return JSON.parse(ajax.response)
}

const newsFeed = getData(NEWS_URL)

// replace with getData

window.addEventListener("hashchange", ()=>{
  const id = location.hash.substring(1)
  const results = getData(CONTENT_URL.replace("@id", id))
})
const mapResult = newsFeed.map(item => `<li><a href=#${item.id}><h1>${item.title}</h1>(${item.comments_count})</a></li>`)
  document.getElementById("root").innerHTML = mapResult
