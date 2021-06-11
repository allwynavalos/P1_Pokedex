// make an Axios call and get results
// create a callback function that take the data and attaches it to the DOM
// select the button to find the pokemon. 
// Attach even listener for the callback function already made

const DOMAIN = "https://pokeapi.co/api/v2/pokemon/";
// const pokemon = search.value






let userInput = document.querySelector('#searchbar')
let searchButton = document.querySelector('#button')
let pokeList = document.querySelector ('#poke-list')

function removePokemon() {
  const removeCurrent = document.querySelector('#poke-list')
  while(removeCurrent.lastChild) {
    removeCurrent.removeChild(removeCurrent.lastChild)

  }
}





const getPokemon = async (userInput) => {
  try{
    const response = await axios.get(`${DOMAIN}${userInput}`)
    let results = response
    // console.log(results)
    renderPokemon(results)
  }catch(error) {
    console.log(error.message)
  }
}







const renderPokemon = (results) => {
  console.log('render function', results)
  // results.forEach(item => {
    let pokeList = document.querySelector('#poke-list')
    const pokeName = document.createElement('div')
    pokeName.innerText= results.data.name
    pokeList.appendChild(pokeName)
    pokeName.classList.add('title')
    document.body.appendChild(pokeName)

    const pokePic = document.createElement('img')
    pokePic.src = results.data.sprites.front_default
    pokeList.appendChild(pokePic)
    const pokePicBack = document.createElement('img')
    pokePicBack.src = results.data.sprites.back_default
    pokeList.appendChild(pokePicBack)
    const pokePicBackShiny = document.createElement('img')
    pokePicBackShiny.src = results.data.sprites.back_shiny
    pokeList.appendChild(pokePicBackShiny)
    const pokePicFrontShiny = document.createElement('img')
    pokePicFrontShiny.src = results.data.sprites.front_shiny
    pokeList.appendChild(pokePicFrontShiny)
    // })
    
  }

//   let div = document.createElement('div');
// div.classList.add('test');
// let text = document.createTextNode('Test');
// div.appendChild(text);
// document.body.appendChild(div)
// .test {
//   color: green;
// }


  searchButton.addEventListener('click', (e) =>{
    e.preventDefault();
    removePokemon()
    let userInput = document.querySelector('#searchbar').value 
    console.log(userInput)
    userInput.innerText = 
    getPokemon(userInput);
  })
  
  // removePokemon();
  




  
  
 











  //  const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
//  const { sprites } = response.data;
//  console.log(Object.entries(sprites));
















 // /  const pokemon = results.map(data => ({
//    name:data.name, 
//    id:data.id,
//    image:data.sprites["front_default"],
//    type:data.types.map(type => type.type.name).join(",")
//  }))
  
//    axios
//   .get(url)
//   .then((res) => console.log(res.data))
//   .catch((error) => console.error(error));
  
//  }
//  getPokemon();












