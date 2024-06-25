
let API_KEY = '817008a78c76b9df1e9b0fc29497a591';
let url = 'https://api.themoviedb.org/3/search/movie';
let urlImg = 'https://image.tmdb.org/t/p/w500';


document.getElementById('searchButton').addEventListener('click', searchMovies);
let resultDiv = document.getElementById('results');


async function searchMovies() {
    resultDiv.innerHTML = 'Cargando...';
    let searchInput = document.getElementById('searchInput').value;
    const response = await fetch(`${url}?query=${searchInput}&api_key=${API_KEY}`)
    const data = await response.json()
    displayMovie(data.results);
}

function displayMovie(movies) {
    resultDiv.innerHTML = '';
    if(movies.length == 0) {
        resultDiv.innerHTML = '<p>No se encontro ninguna pelicula con ese nombre</p>';
        resultDiv.style.color = 'red';
        return;
    }
    resultDiv.style.color = 'black';
    movies.forEach(movie => {
        console.log(movie)
        let movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        let title = document.createElement('h2');
        title.textContent = movie.title;

        let votes = document.createElement('p');
        votes.textContent = 'Votos: ' + movie.vote_count;

        let realeaseDate = document.createElement('p');
        realeaseDate.textContent = 'La fecha de lanzamiento fue: ' + movie.release_date;

        let description = document.createElement('p');
        description.textContent = movie.overview;

        let image = document.createElement('img');
        image.src = urlImg + movie.poster_path;

        movieDiv.appendChild(image);
        movieDiv.appendChild(title);
        movieDiv.appendChild(votes);
        movieDiv.appendChild(realeaseDate);
        movieDiv.appendChild(description);

        resultDiv.appendChild(movieDiv);

    });
}
