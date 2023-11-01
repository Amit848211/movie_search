// const apiKey = "18d39c70a548118e2ba26ecce359f5ba";
// const apiUrl = "https://api.themoviedb.org/3/search/movie?api_key=18d39c70a548118e2ba26ecce359f5ba&query=";


const form =document.getElementById("form");
const search = document.getElementById("search");
const main =document.getElementById("main");
 async function gettingMovies(element){
    let response =await fetch(`https://www.omdbapi.com/?t=${element.title}&apikey=98ca7173`);
    let data =await response.json()
    console.log(data);
    const {Title,Poster,imdbRating,Plot,Year,Director,Writer,Actors,Released,BoxOffice}=data
    const moviesElement =document.createElement("div")
    moviesElement.classList.add("movie1")
    moviesElement.innerHTML=`
    <img src="${Poster
    }" alt="${Title}"/>
    <div class="movie1-info">
    <h3>Title:${Title}</h3>
    <h3>Year:${Year}</h3>
    <h3>Director:${Director}</h3>
    <h3>Writer:${Writer}</h3>
    <h3>Cast:${Actors}</h3>
    <h3>Released Date:${Released}</h3>
    <h3>BoxOffice:${BoxOffice}</h3>

    <span class="${getclassesByRating(imdbRating)}">mdbRating :   ${imdbRating}</span>
    <div class="overview1">
    ${Plot}
    </div>
    </div>
    `
    main.appendChild(moviesElement)
}



 function previousMovies(data){
    data.forEach(element => {
        console.log(element);
        gettingMovies(element);
        

    });

}
async function moviesDetails(){
    let response=await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=18d39c70a548118e2ba26ecce359f5ba`);
    let data = await response.json();
    console.log(data.results);
    previousMovies(data.results);
}
moviesDetails();




// getMovies(apiUrl)
async function getMovies(){
    let response = await fetch(`https://www.omdbapi.com/?t=${search.value}&apikey=98ca7173`);
    let data = await response.json()
    console.log(data);
    displayMovies(data);
}
function displayMovies(data){
main.innerHTML=""

    const {Title,Poster,imdbRating,Plot,Year,Director,Writer,Actors,Released,BoxOffice}=data
    const moviesElement =document.createElement("div")
    moviesElement.classList.add("movie")
    moviesElement.innerHTML=`
    <img src="${Poster
    }" alt="${Title}"/>
    <div class="movie-info">
    <h3>Title:${Title}</h3>
    <h3>Year:${Year}</h3>
    <h3>Director:${Director}</h3>
    <h3>Writer:${Writer}</h3>
    <h3>Cast:${Actors}</h3>
    <h3>Released Date:${Released}</h3>
    <h3>BoxOffice:${BoxOffice}</h3>

    <span class="${getclassesByRating(imdbRating)}">mdbRating :   ${imdbRating}</span>
    <div class="overview">
    ${Plot}
    </div>
    </div>
    `
    main.appendChild(moviesElement)
}
function getclassesByRating(rating){
    if(rating>=8){
        return "green"
    }
    else if(rating>=5){
        return "orange"
    }
    else{
        return "red"
    }
}
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    searchValue=search.value
    if(searchValue && searchValue !==''){
        getMovies()
        searchValue=''
    }
    
})
    