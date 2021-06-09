// make an Axios call and get results
// create a callback function that take the data and attaches it to the DOM
// select the button to find the pokemon. 
// Attach even listener for the callback function already made

const DOMAIN = "https://pokeapi.co/api/v2/pokemon/";
// const pokemon = search.value






let userInput = document.querySelector('#searchbar')
let searchButton = document.querySelector('#button')
let pokeList = document.querySelector ('#pokeList')

searchButton.addEventListener('click', (e) =>{
  e.preventDefault()
  let userInput = document.querySelector('#searchbar').value 
  console.log(userInput)
  getPokemon(userInput)
})



const getPokemon = async (userInput) => {
  try{
  const response = await axios.get(`${DOMAIN}${userInput}`)
  let results = response
  console.log(results)
  renderPokemon(results)
  }catch(error) {
  console.log(error.message)
  }
 }
 getPokemon()

 
 
  
  function removePokemon() {
    const removeCurrent = document.querySelector('#poke-List')
    while(removeCurrent.lastChild) {
      removeCurrent.removeChild(removeCurrent.lastChild)
    }
  }



  const renderPokemon = (results) => {
    
    console.log('render function', results)
    // results.forEach(item => {
      let pokeList = document.querySelector('#poke-list')
      const pokeName = document.createElement('div')
      pokeName.innerText= results.data.name
      pokeList.appendChild(pokeName)
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
      pokePicFrontShiny.src = results.data.sprites.front_default
      pokeList.appendChild(pokePicFrontShiny)
    // })
  }







  // function removePokemon() {
  //   const removeCurrent = document.querySelector('#poke-List')
  //   while(removeCurrent.lastChild) {
  //     removeCurrent.removeChild(removeCurrent.lastChild)
  //   }
  // }
  
  
 











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












