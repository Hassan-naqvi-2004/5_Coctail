import React, { useEffect, useState } from "react";

const App = () => {
  const api = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`;
  const [cocktail, setCocktail] = useState([]);
  const [search, setSearch] = useState(" ");
  useEffect(() => {
    async function cocktail() {
      const data = await fetch(api);
      const data2 = await data.json();
      console.log(data2.drinks);
      setCocktail(data2.drinks)
    }
    cocktail();
  }, []);

  const Mysearch = async() =>{
    const api2 = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${search}`
    const data = await fetch(api2);
    const data2 = await data.json();
    console.log(data2.drinks)
    setCocktail(data2.drinks)
  }




  return ( 
  <div>
   
   <nav>
   <div className="textmain ">
      <h1>The Coctail Hub</h1>

    <div className="test1i">      
      <input type="text" onChange={(e)=> setSearch(e.target.value)} />
       <button onClick={Mysearch}>Click me</button>
    </div>

      <div className="text1">
        <p>Home</p>
        <p>About</p>
      </div>
    </div>
    
   
    </nav>
    <div className="main">
    {cocktail.map((sp)=>{
        const { strDrink ,strDrinkThumb} = sp
        return(
          <>
          
          <div className="item">
          <h1>{strDrink}</h1>
          <div className="image">
          <img src={strDrinkThumb} alt="" />
          </div>
          </div>
          </>
        )
    })}
    </div>
  </div>
  );
};

export default App;
