// 3. Зібрати в масив назви всіх резидентів "residents", з усіх планет що були у фільмі "Return of the Jedi" (id = 3).
// Використовуйте async/await
//  Масив має мати наступний вигляд
//  [
//    {
//      planetName: 'SomePlanet1', 
//      residents: ['Han Solo', 'r2d2']
//    },
//    {
//      planetName: 'SomePlanet2', 
//      residents: ['Luke Skywalker', 'C3PO']
//    }
//  ]




  //2. function expressions ver
  (async function() {
    try {
      const response = await fetch('https://swapi.dev/api/films/3');
      const body = await response.json();
      const planetUrls = body.planets;

      const planetsPromisesArray = planetUrls.map(function(url) {
        return (async function() {
          const planetsResponse = await fetch(url);
          return await planetsResponse.json();
        })();
      });
  
      const planets = await Promise.all(planetsPromisesArray);

      const planetResidentsPromises = planets.map(async function(planet) {
       
        const residentPromises = planet.residents.map(function(url) {
          return (async function() {
            const residentsResponse = await fetch(url);
            return await residentsResponse.json();
          })();
        });
  
        const residents = await Promise.all(residentPromises);
        const residentNames = residents.map(function (resident) {
          return resident.name;
        });
        return {
          planetName: planet.name,
          residents: residentNames
        };
      });
      const planetResidentsArray = await Promise.all(planetResidentsPromises);
      console.log(planetResidentsArray);
  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  })();

  //arrow functions ver
  (async () => {
    try {
      const response = await fetch('https://swapi.dev/api/films/3');
      const body = await response.json();
      const planetUrls = body.planets;
  
      const planetsPromisesArray = planetUrls.map(url => 
        (async () => {
          const planetsResponse = await fetch(url);
          return await planetsResponse.json();
        })()
      );
  
      const planets = await Promise.all(planetsPromisesArray);
  
      const planetResidentsPromises = planets.map(async planet => {
        const residentPromises = planet.residents.map(url => 
          (async () => {
            const residentsResponse = await fetch(url);
            return await residentsResponse.json();
          })()
        );
  
        const residents = await Promise.all(residentPromises);
        const residentNames = residents.map(resident => resident.name);
        
        return {
          planetName: planet.name,
          residents: residentNames
        };
      });
  
      const planetResidentsArray = await Promise.all(planetResidentsPromises);
      console.log(planetResidentsArray);
  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  })();