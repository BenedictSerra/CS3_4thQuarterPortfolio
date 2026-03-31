  const stars = document.querySelectorAll(".star");   //To get the span elements with star
  const form = document.getElementById("form"); //form
  const title = document.getElementById("title"); // title input 
  const year = document.getElementById("year"); // yyear input
  const genre = document.getElementById("genre"); //genre input

  let rating = 0; // initializing rating number

  stars.forEach(star => {  // for each star
    star.addEventListener("click", () => { // if star is clicked, make the rating equal to
    // the star attribute "data-value"
      rating = star.getAttribute("data-value"); // star 1 has data-value 1, star 2 has 2, etc.

      stars.forEach(s => {
        
        
        if (s.getAttribute("data-value") <= rating) { //checking each star again
          s.classList.add("active"); // if star is data-value is <= rating, give .active
          // which highlights the star gold
        } else {
          s.classList.remove("active"); // else remove the highlight
        }
      });
    });
  }); 

  function getRating() {
      return JSON.parse(localStorage.getItem("rating")) || []; // retrieving from storage
  }

  function saveRating(data) {
      localStorage.setItem("rating", JSON.stringify(data)) //saving to storage
  }

  form.addEventListener("submit", function(e){ //on submit click after form
      
      const ratings = getRating();

      if (rating==0) { // if no rating is given
          e.preventDefault();
          alert("Please rate the movie!")
          return;
      }

      else {
          const confirmed = confirm("Are you sure about your rating?");
          if (!confirmed) {
              e.preventDefault(); // prevents from resetting form
              return;
          }
      }


      const user = { // saving in object
          title: title.value,
          year: year.value,
          genre: genre.value,
          rating: rating,
      };

  
      let found = false;

      ratings.forEach(movie => {

        if (movie.title.toLowerCase() === user.title.toLowerCase())
        {
          movie.title = user.title;
          movie.year = user.year;
          movie.genre = user.genre;
          movie.rating = Math.round((Number(user.rating) + Number(movie.rating)) /2 )
          found = true;
        }

      });

      if (!found)
      {
          ratings.push(user); // pushing object to array
      }


      saveRating(ratings); // saving new ratings

      alert("Signup Saved!");
      form.reset();
      displayMovies(); // displays new movie ratings

  });

  function deleteBtn(index) {
    const ratings  = getRating();
    
    const confirmed = confirm("Are you sure you want to delete the movie");

    if (!confirmed) {
      return;
    }

    ratings.splice(index, 1);
    saveRating(ratings);
    displayMovies();
  }

  function displayMovies() {
      const movieList = document.getElementById("movieList")
      const ratings = getRating(); 

      movieList.innerHTML = "";

      ratings.forEach((movie, index) => {
          let stars = "★".repeat(movie.rating) + "☆".repeat(5-movie.rating)
          
          const movieItem = document.createElement("div"); // gives a div to each movie item
          movieItem.classList.add("movieItem"); 
          movieItem.innerHTML = `${movie.title} (${movie.year}) - ${movie.genre}, 
          Rating:      <span style="color:gold; font-size: 23px;">${stars}</span> <br> <br>
          <button class="delete" onclick="deleteBtn(${index})">Delete</button> `

          movieList.appendChild(movieItem); // adds new div to movielist
      });
  }

  displayMovies();  // when html page is loaded


