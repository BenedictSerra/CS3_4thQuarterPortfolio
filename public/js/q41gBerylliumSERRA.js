const stars = document.querySelectorAll(".star");
const ratingText = document.getElementById("rating-text");
const form = document.getElementById("form");
const title = document.getElementById("title");
const year = document.getElementById("year");
const genre = document.getElementById("genre"); 

let rating = 0;

stars.forEach(star => {
  star.addEventListener("click", () => {
    rating = star.getAttribute("data-value");

    stars.forEach(s => {
      
      
      if (s.getAttribute("data-value") <= rating) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
    });
  });
}); 

function getRating() {
    return JSON.parse(localStorage.getItem("rating")) || [];
}

function saveRating(data) {
    localStorage.setItem("rating", JSON.stringify(data))
}

form.addEventListener("submit", function(e){
    
    const ratings = getRating();

    if (rating==0) {
        e.preventDefault();
        alert("Please rate the movie!")
    }

    else {
        const confirmed = confirm("Are you sure about your rating?");
        if (!confirmed) {
            e.preventDefault();
            return;
        }
    }


    const user = {
        title: title.value,
        year: year.value,
        genre: genre.value,
        rating: rating,
    };

    ratings.push(user);
    saveRating(ratings);

    alert("Signup Saved!");
    form.reset();
    displayMovies();

});


function displayMovies() {
    const movieList = document.getElementById("movieList")
    const ratings = getRating();

    movieList.innerHTML = "";

    ratings.forEach(movie => {
        let stars = "★".repeat(movie.rating) + "☆".repeat(5-movie.rating)
        
        const movieItem = document.createElement("div");
        movieItem.classList.add("movieItem");
        movieItem.innerHTML = `${movie.title} (${movie.year}) - ${movie.genre}, 
        Rating:      <span style="color:gold; font-size: 23px;">${stars}</span>`

        movieList.appendChild(movieItem);
    })
}

displayMovies();


