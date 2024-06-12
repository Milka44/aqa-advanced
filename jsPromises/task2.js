// 2 Вивеcти в консоль назви всіх "starships" котрими володів Han Solo (id = 14):
//     2.1 Використовуючи методи классу Promise 

//with array.map
fetch('https://swapi.dev/api/people/14')
  .then(response => response.json())
  .then(body => {
    const starshipUrls = body.starships;
    //console.log(starshipUrls);
    const starshipPromisesArray = starshipUrls.map(url => fetch(url)
  .then(response => response.json()));
    //console.log(starshipPromisesArray)//[ Promise { <pending> }, Promise { <pending> } ]
     return Promise.all(starshipPromisesArray)
    
  })
    .then(starships => {
    const starshipNames = starships.map(starship => starship.name);
    console.log(starshipNames);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// with  for loop
 
fetch('https://swapi.dev/api/people/14')
.then(response => response.json())
.then(body => {
  const starshipUrls = body.starships;
  fetchStarshipNames(starshipUrls);
})
  .catch(error => {
    console.error('Error fetching data:', error);
  });

function fetchStarshipNames(urls) {
const starshipPromises = [];
for (let url of urls) {
  starshipPromises.push(fetch(url).then(response => response.json()));
}


Promise.all(starshipPromises)
  .then(starships => {
    const starshipNames = [];
    for (let starship of starships) {
      starshipNames.push(starship.name);
    }
    console.log(starshipNames);
  })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}
 
  //     2.2 Використовуючи async/await

(async () => { 
  
  try {
    
    const response = await fetch('https://swapi.dev/api/people/14');
    const body = await response.json();
    const starshipUrls = body.starships;
    //console.log(body.starships)
     // Fetch data for all starships and wait until all promises are resolved
    const starshipPromisesArray = starshipUrls.map(async (url) => {
    const starshipResponse = await fetch(url);
    return await starshipResponse.json();
     });
     
    
    const starships = await Promise.all(starshipPromisesArray);
    //console.log(starships);//all Jsons of starships
    
       const starshipNames = starships.map(ship => ship.name);
       console.log(starshipNames);

     } catch (error) {
       console.error('Error fetching data:', error);
     }
   })();
