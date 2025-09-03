package com.example.movieticketbooking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class MovieTicketBookingApplication {

    public static void main(String[] args) {
        SpringApplication.run(MovieTicketBookingApplication.class, args);
    }
}

@RestController
class MovieController {

    @GetMapping("/movies")
    public Movie[] getMovies() {
        return new Movie[]{
            new Movie("RRR", "https://upload.wikimedia.org/wikipedia/en/7/73/RRR_poster.jpg", "A fictional story of two legendary revolutionaries."),
            new Movie("Sarkaru Vaari Paata", "https://upload.wikimedia.org/wikipedia/en/a/a1/Sarkaru_Vaari_Paata_poster.jpg", "A comedy action film starring Mahesh Babu."),
            new Movie("Pushpa: The Rise", "https://upload.wikimedia.org/wikipedia/en/a/a1/Pushpa_-_The_Rise.jpg", "A gritty tale of red sandalwood smuggling.")
        };
    }
}

class Movie {
    private String title;
    private String image;
    private String description;

    // Constructor
    public Movie(String title, String image, String description) {
        this.title = title;
        this.image = image;
        this.description = description;
    }

    // Getters and setters
    public String getTitle() {
        return title;
    }

    public String getImage() {
        return image;
    }

    public String getDescription() {
        return description;
    }
}
