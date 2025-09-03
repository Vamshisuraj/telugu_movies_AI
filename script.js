document.addEventListener('DOMContentLoaded', function() {
    const movies = [
        {
            title: "RRR",
            image: "https://upload.wikimedia.org/wikipedia/en/7/73/RRR_poster.jpg",
            description: "A fictional story of two legendary revolutionaries."
        },
        {
            title: "Sarkaru Vaari Paata",
            image: "https://upload.wikimedia.org/wikipedia/en/a/a1/Sarkaru_Vaari_Paata_poster.jpg",
            description: "A comedy action film starring Mahesh Babu."
        },
        {
            title: "Pushpa: The Rise",
            image: "https://upload.wikimedia.org/wikipedia/en/a/a1/Pushpa_-_The_Rise.jpg",
            description: "A gritty tale of red sandalwood smuggling."
        }
        // You can add more movie objects here...
    ];

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
});

function bookTicket(movieTitle) {
    alert("Ticket booked for: " + movieTitle);
}
