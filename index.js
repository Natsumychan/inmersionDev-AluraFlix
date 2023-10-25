const movieLibrary= [
 {
  name: "The Owl House",
  source: "./assets/owl-house.jpeg"
 },
 {
  name: "Arcane",
  source: "./assets/arcane.jpeg"
 },
 {
  name: "Cuphead",
  source: "./assets/cuphead.jpeg"
 },
 {
  name: "Amphibia",
  source: "./assets/anfibia.jpeg"
 },
 {
  name: "Fiona and Cake",
  source: "./assets/fiona-and-cake.jpeg"
 },
 {
  name: "The amazing world of Gumball",
  source: "./assets/gumball.jpeg"
 },
 {
  name: "Tangled",
  source: "./assets/tangled.jpeg"
 },
 {
  name: "Wander over Yonder",
  source: "./assets/wander.jpeg"
 },
];

const movieContainer= document.querySelector(".movie-container")
let movieCard=``

movieLibrary.map((movie,index) =>{
 movieCard= movieCard+`
   <div class="movie-card">
         <img src=${movie.source} alt=${movie.name} key= ${index} class="poster-img">
         <h2 class="movie-title">${movie.name}</h2>
   </div>
         `
  return movieCard
})

 movieContainer.innerHTML= movieCard
   