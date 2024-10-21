const movies = [
    { id: 1, title: "Tangled (2010)", poster: "https://upload.wikimedia.org/wikipedia/id/a/a8/Tangled_poster.jpg" },
    { id: 2, title: "Garfield (2024)", poster: "https://awsimages.detik.net.id/community/media/visual/2024/05/28/sinopsis-the-garfield-movie.jpeg?w=1200" },
    { id: 3, title: "Elemental (2023)", poster: "https://lumiere-a.akamaihd.net/v1/images/elemental-poster-id_8425eb19.jpeg?region=0%2C0%2C600%2C900" },
    { id: 4, title: "Inside Out 2 (2024)", poster: "https://awsimages.detik.net.id/community/media/visual/2024/06/06/inside-out-2_34.jpeg?w=1200&q=90" },
    { id: 5, title: "Turning Red (2022)", poster: "https://upload.wikimedia.org/wikipedia/id/thumb/1/13/Poster_film_Turning_Red.jpg/220px-Poster_film_Turning_Red.jpg" },
    { id: 6, title: "Brave (2012)", poster: "https://upload.wikimedia.org/wikipedia/id/9/96/Brave_Poster.jpg" }
];

// Function untuk membuat movie cards
function createMovieCard(movie) {
    return `
        <div class="movie-card">
            <img src="${movie.poster}" alt="${movie.title}">
            <div class="movie-title">${movie.title}</div>
        </div>
    `;
}

// Function untuk populate movie grids
function populateMovieGrid(gridId, movies) {
    const grid = document.getElementById(gridId);
    grid.innerHTML = movies.map(createMovieCard).join('');
}

populateMovieGrid('trendingGrid', movies);
populateMovieGrid('latestGrid', movies);

// Search functionality
const searchInput = document.getElementById('searchInput');
const trendingSection = document.getElementById('trendingSection');
const latestSection = document.getElementById('latestSection');
const resultSection = document.getElementById('resultSection');

searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    if (searchTerm) {
        const filteredMovies = movies.filter(movie => 
            movie.title.toLowerCase().includes(searchTerm)
        );
        populateMovieGrid('resultGrid', filteredMovies);
        trendingSection.style.display = 'none';
        latestSection.style.display = 'none';
        resultSection.style.display = 'block';
    } else {
        trendingSection.style.display = 'block';
        latestSection.style.display = 'block';
        resultSection.style.display = 'none';
    }
});