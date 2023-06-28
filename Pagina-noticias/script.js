const apiKey = 'pub_2530260114514d9c026db61911074f2022a1c';
const newsdata_url = `https://newsdata.io/api/1/news?apikey=${apiKey}`;

const status_data = {
  request: {
    fetch_url: newsdata_url,
    fetching: false,
    query: {
      country: "br",
      category: "",
      q: "",
      language: "",
      page: ""
    }
  },
  results: {
    query: {},
    news: null,
    pages: {
      history: [],
      step: 0
    },
  }
}

sources = {
  category: {
    "": "Geral",
    "top": "Top",
    "world": "Mundo",
    "politics": "Política",
    "health": "Saúde",
    "technology": "Tecnologia",
    "entertainment": "Entretenimento",
    "sports": "Esportes"
  },
  country: {
    "br,brazil": "Brasil",
    "": "Global",
    "de,germany": "Alemanha",
    "ar,argentina": "Argentina",
    "au,australia": "Austrália",
    "bo,bolivia": "Bolívia",
    "cn": "China",
    "kr,souty korea": "Coréia do Sul",
    "dk,denmark": "Dinamarca",
    "us,united states of america": "EUA",
    "eg,egypt": "Egito",
    "es": "Espanha",
    "fr,france": "França",
    "il,israel": "Israel",
    "it,italy": "Itália",
    "jp,japan": "Japão",
    "pe,peru": "Peru",
    "tr,turkey": "Turquia",
    "pt,portugal": "Portugal",
    "za,south africa": "África do Sul",
    "in,india": "Índia",
  }

}

function switchColorMode() {
  const htmlPage = document.querySelector("html");
  const currMode = htmlPage.getAttribute("data-bs-theme");
  if (currMode == "dark") {
    htmlPage.setAttribute("data-bs-theme", "light");
  }
  else {
    htmlPage.setAttribute("data-bs-theme", "dark");
  }
}

function applyQuery(url) {
  const query = status_data.request.query;
  const queryString = Object.keys(query).map(key => !(query[key] == null || query[key].trim().length === 0) ?
    (encodeURIComponent(key) + '=' + encodeURIComponent(query[key])) : null).join('&');
  return url + `&${queryString}`;
}

async function requestAPI(url) {
  response = await fetch(url);
  const data = await response.json();
  return data;
}

function resetSearch() {
  status_data.results = {
    query: {},
    news: null,
    pages: {
      history: [],
      step: 0
    },
  }
  status_data.request.query.page = "";
}

resetSearch();
function clearNews() {
  const fetched_news = document.querySelectorAll(".fetched-news");
  fetched_news.forEach(node => {
    node.remove();
  });
}

function changeOption(option, source) {
  if (setOptionQuery(option, source)) {
    getSearchQuery();
    reloadNews();
  }
}

function generateOptionButton(modelBtn, clone, option, handler, ...handlerArgs) {
  const optionBtn = clone ? modelBtn.cloneNode(true) : modelBtn;
  optionBtn.setAttribute("data-option", option);

  optionBtn.addEventListener('click', () => handler(option, ...handlerArgs));

  return optionBtn;
}

function getSearchQuery() {
  const searchInput = document.querySelector("#searchInput");
  status_data.request.query.q = searchInput.value;
  resetSearch();
  return true;
}

function displayNews(news) {
  const articles = news.results;
  const newsContainer = document.querySelector(".news-container");
  const newsTemplate = newsContainer.querySelector(".news-template");
  const resultText = newsContainer.querySelector(".result-text");

  if (status_data.results.query.q != "") {
    resultText.textContent = `Encontradas ${status_data.results.news.totalResults} notícias`;
    resultText.style.display = "block";
  }
  else {
    resultText.style.display = "none";
  }


  articles.forEach(article => {
    const articleElement = newsTemplate.cloneNode(true);
    articleElement.classList.remove("template");
    articleElement.classList.add("fetched-news");
    const titleElement = articleElement.querySelector(".news-title").firstElementChild;
    titleElement.setAttribute("href", article.link);
    titleElement.innerText = article.title;
    const descriptionElement = articleElement.querySelector(".news-description");
    descriptionElement.textContent = article.description;
    const imageElement = articleElement.querySelector(".news-image");
    if (article.image_url == null) {
      imageElement.style.display = "none";
    }
    else {
      imageElement.src = article.image_url;
    }


    Object.keys(sources).forEach(src => {
      const optionElement = articleElement.querySelector(`.news-${src}[data-option]`);
      if (optionElement == undefined) {
        console.log(`could not find ${src} option element...`);
        return;
      }
      if (status_data.results.query[src] != "") {
        optionElement.style.display = "none";
      }
      else {
        const opt = getActualOption(article[src], sources[src]);
        const optionName = sources[src][opt];
        optionElement.firstElementChild.innerText = optionName;
        generateOptionButton(optionElement, false, opt.split(','), changeOption, src);
      }

    })

    const showMoreElement = articleElement.querySelector(".show-more");
    showMoreElement.addEventListener('click', () => {
      if (descriptionElement.classList.contains("expanded")) {
        descriptionElement.classList.remove("expanded");
        showMoreElement.innerText = "Ver mais";
      }
      else {
        descriptionElement.classList.add("expanded");
        showMoreElement.innerText = "Ver menos";
      }
    });


    newsContainer.appendChild(articleElement);



    if (descriptionElement.clientHeight < descriptionElement.scrollHeight) {
      showMoreElement.style.display = "inline";
    }

  });
}

function updatePager() {

  const pagers = document.querySelectorAll(".news-pager");
  pagers.forEach(pager => {
    pager.querySelector(".steps-count").textContent = status_data.results.pages.step + 1;
    pager.querySelectorAll(".btn-pages").forEach(btn => {
      const steps = btn.getAttribute("data-steps");
      const isInBounds = checkBoundaryPage(Number(steps));
      if (isInBounds) {
        btn.classList.remove("disabled");
      }
      else {
        btn.classList.add("disabled");
      }
    })
  })


}

function reloadNews() {
  if (status_data.request.fetching) {
    return;
  }
  clearNews();
  status_data.request.fetch_url = applyQuery(newsdata_url);
  fetchAndDisplayNews();

}


async function fetchAndDisplayNews() {
  let news = status_data.results.news;
  if (news == null && status_data.request.query.page != null) {
    status_data.request.fetching = true;
    news = await requestAPI(status_data.request.fetch_url);
    status_data.results.news = news;
    status_data.request.query.page = news.nextPage;
    status_data.results.query = Object.assign({}, status_data.request.query);
  }

  displayNews(news);
  updatePager();
  status_data.request.fetching = false;
}


Object.keys(sources).forEach(src => {
  const optionMenuModel = document.querySelector(`.option-menu .${src}-menu button[data-option]`);
  Object.keys(sources[src]).forEach(option => {
    const button = generateOptionButton(optionMenuModel, true, option.split(','), changeOption, src);
    button.classList.remove("template");
    button.innerText = sources[src][option];
    optionMenuModel.parentNode.appendChild(button);
  })
})


function getActualOption(option, source) {
  let actopt = '';
  option.forEach(opt => {
    Object.keys(source).forEach(src => {
      const names = src.split(',');
      if (names.indexOf(opt) > -1) {
        actopt = src;
        return;
      }
    })
  })
  return actopt;
}

function setOptionQuery(option, type) {
  option = getActualOption(option, sources[type], false);
  const realOption = option.split(",")[0];
  if (status_data.request.query[type] != realOption) {
    status_data.request.query[type] = realOption;
    const dropdown = document.querySelector(`#${type}Dropdown`);
    dropdown.textContent = sources[type][option];
    return true;
  }
  return false;
}


function checkBoundaryPage(steps) {
  const index = status_data.results.pages.step + steps;
  if (index >= status_data.results.pages.history.length && status_data.request.query.page == null) {
    return false;
  }
  if (index < 0) {
    return false;
  }

  return true;
}

function queryPage(steps) {
  if (steps == 0 || status_data.request.fetching) {
    return;
  }

  const isInBounds = checkBoundaryPage(steps);
  const pages = status_data.results.pages;
  const news = status_data.results.news;
  if (pages.history.length <= 0 || (news != null && news != pages.history[pages.step])) {
    pages.history.push(news)
  }
  // debugger;
  if (steps > 0) {
    if (isInBounds) {
      pages.step += steps;
    }
    else {
      status_data.results.news = null;
      pages.step = pages.history.length;
      return;
    }
  }
  else {
    if (isInBounds) {
      pages.step += steps;
    }
    else {
      pages.step = 0;
    }
  }

  status_data.results.news = pages.history[pages.step];
}


{
  document.querySelectorAll(".news-pager").forEach(pager => {
    pager.querySelectorAll(".btn-pages").forEach(btn => {
      const steps = btn.getAttribute("data-steps");
      btn.addEventListener("click", () => {
        queryPage(Number(steps));
        reloadNews();

      })
    })
  });
}

reloadNews();




