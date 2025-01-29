const API_KEY = "b04c06dec1161c3e36c099e4590068dc"

let page = 1
const API_URL = () => `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`
const API_IMG = 'https://image.tmdb.org/t/p/w1280'
const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=b04c06dec1161c3e36c099e4590068dc&query='

async function getMovies(url) {
    const response = await fetch(url)
    const data = await response.json()
    showMovies(data.results)
}

function updatePage() {
     getMovies(API_URL());
     currentPage.innerHTML = page;
}

function nextPage() {
    if (page >= 1) {
        page += 1;
        updatePage();
    }
}

function prevPage() {
    if (page > 1) {
      page -= 1;
      updatePage();
    }
}

next.addEventListener("click", () => {
  nextPage();
});

prev.addEventListener("click", () => {
  prevPage();
});

function showMovies(movies) {
    moviesElement.innerHTML = ''
    movies .forEach((movie) => {
        const { title, poster_path, overview} = movie
        const movieCard = document.createElement('div')
        movieCard.classList.add('movie')

        movieCard.innerHTML = `
        <img src="${API_IMG + poster_path}" alt="${title}">
        <div class="movie-info">
            <h4>${title}</h4>
            <p>${overview.substring(0, 120)}..</p>
        </div>
        `;
        moviesElement.appendChild(movieCard)
    })
}


form.addEventListener('submit', (event) => {
    event.preventDefault()
    const searchQuery = search.value

    if (searchQuery !== '') {
        getMovies(API_SEARCH + searchQuery)
        search.value = ''
    } 
})



updatePage()



