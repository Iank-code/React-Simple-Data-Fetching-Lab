import './App.css';
import React, { useState, useEffect} from 'react'

function App() {
  const DOG_API = 'https://dog.ceo/api/breeds/image/random'
  const [randomDog, setRandomDog] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    fetch(DOG_API)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch error");
        }
        return res.json();
      })
      .then((data) => {
        setLoading(true);
        setRandomDog(data.message);
      });
  }, [randomDog]);

  if(loading === false){
    setLoading('Loading....')
  }
  return (
    <div className="App">
      <p>{loading}</p>
      <img src={randomDog} alt="A Random Dog"></img>
    </div>
  );
}

export default App;
