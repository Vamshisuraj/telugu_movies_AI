document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:8080/movies')
        .then(response => response.json())
        .then(movies => {
            const moviesContainer = document.getElementById('movies');
            movies.forEach(movie => {
                const movieElement = document.createElement('div');
                movieElement.classList.add('movie');
                movieElement.innerHTML = `
                    <img src="${movie.image}" alt="${movie.title}">
                    <div class="movie-details">
                        <h3>${movie.title}</h3>
                        <p>${movie.description}</p>
                        <button onclick="bookTicket('${movie.title}')">Book Ticket</button>
                    </div>
                `;
                moviesContainer.appendChild(movieElement);
            });
        })
        .catch(error => console.log('Error fetching movie data:', error));
});

function bookTicket(movieTitle) {
    alert("Ticket booked for: " + movieTitle);
}
