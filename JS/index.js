let data = [];
let cartoona = "";

function displayMovies() {
  let movieList = document.getElementById("movieList");
  for (let i = 0; i < data.length; i++) {
    cartoona += `
        <div class="col-lg-3 col-sm-6 my-3">
        <div class="card h-100 shadow border-0" style="width: 18rem;">
          <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${
            data[i].poster_path
          }
          " class="card-img-top" alt="...">
          <div class="card-body position-relative">
            <h5 class="card-title pt-3 fw-bold">${data[i].title}
            </h5>
            <p class="card-text text-muted">${data[i].release_date}.</p>
            <span
              class="rate-badge">${Math.round(
                Number(data[i].vote_average / 10) * 100
              )}%</span>
          </div>
        </div>
      </div>
        `;
  }
  movieList.innerHTML = cartoona;
}

(async function () {
  let response = await fetch(
    "https://api.themoviedb.org/3/trending/movie/week?api_key=2e6a6449322614c48c47daede1e94909"
  );
  response = await response.json();
  data = response.results;
  displayMovies();
})();
