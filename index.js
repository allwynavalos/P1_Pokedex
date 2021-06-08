// make an Axios call and get results
// create a callback function that take the data and attaches it to the DOM
// select the button to find the pokemon. 
// Attach even listener for the callback function already made

const DOMAIN = "https://pokeapi.co/api/v2/pokemon/";
// const pokemon = search.value





// try {
//   const result = await.axios.get(DOMAIN + pokemon);
//   console.log(result);

// }catch.error((error))




let userInput = document.querySelector('#search')
let searchButton = document.querySelector('#button')
let pokeList = document.querySelector ('.pokeList')

searchButton.addEventListener('click', (e) =>{
  e.preventDefault()
  let userInput = document.querySelector('#search').value 
  console.log(userInput)
  getPokemon(userInput)
})







 const getPokemon = async (userInput) => {
  try{
  const response = await axios.get(`${DOMAIN}${userInput}`)
  let results = response
  console.log(results)
  }catch(error) {
  console.log(error.message)
  }
 }
 getPokemon()
  
//    axios
//   .get(url)
//   .then((res) => console.log(res.data))
//   .catch((error) => console.error(error));
  
//  }
//  getPokemon();
 
//  for (let i = 1;i <= 1118; i++){
//    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
//    fetch(url)
//    .then (res => )
//  }








// const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
// const { sprites } = response.data;
// console.log(Object.entries(sprites));