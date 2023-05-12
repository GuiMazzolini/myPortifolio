import portfolio from "./data.json" assert {type: "json"}
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const imgPortfolio = document.getElementById('portfolio');
const portfolioPage = document.getElementById('portfoliopage')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});

for (let i = 0; i < portfolio.length; i++) {
    const div = document.createElement('div')
    div.classList.add('portfolio__item')
    const img = document.createElement("img");
    img.src = portfolio[i].image;
    img.classList.add("portfolio__img");
    img.onclick = function() {
        window.open(`portfolio-item.html?index=${i}`, "_self");
  };
  div.appendChild(img)
  imgPortfolio?.appendChild(div);
};
// for (let i = 0; i < portfolio.length; i++) {
//     const img = document.createElement("img");
//     img.src = portfolio[i].image;
//     img.classList.add("portfolio__img");
//     img.onclick = function() {
//         window.open(`portfolio-item.html?index=${i}`, "_self");
//   };
//   imgPortfolio?.appendChild(img);
// };

function displayItemInfo() {
    const urlParams = new URLSearchParams(window.location.search);
    const index = parseInt(urlParams.get('index'));
    const item = portfolio[index];

    portfolioPage.innerHTML = `
    <section class="intro">
        <h1 class="section__title section__title--intro">${item.title}</h1>
         <a href=${item.gitHubLink} target="_blank" class="section__subtitle section__subtitle--intro" id="git--button">GitHub Link</a>
         <img src="${item.image}" alt="" class="intro__img">
     </section>
     <div class="portfolio-item-individual">
         <p>${item.shortDescription}</p>
         <img src="${item.image}" alt="">
         <p>${item.fullDescription}</p>
     </div>
    `
  };

displayItemInfo();
