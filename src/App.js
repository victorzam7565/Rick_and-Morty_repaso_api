
import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'

// https://rickandmortyapi.com/api/character/

function App() {

    const [personajes, setPersonajes]=useState([])  

useEffect(()=>{
      axios.get('https://rickandmortyapi.com/api/character/').then(res=>{
setPersonajes(res.data.results)
//console.log(res.data)
      }).catch(error=>console.log(error))

},[])

console.log(personajes)

  return (
      //"row row-cols-1 row-cols-md-3 g4"  
    <div className="App">
        
   <h1 > Api Rick and Morty </h1>
                            
<div className="row col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">


{  personajes.map(per=>(
<div className="col" key={per.id}>      
<div className="card" style={{width: "13rem",height:"18rem"}}>
  <img src={`${per.image}`} className="card-img-top" style={{width:"80%",height:"80%"}}
  class="card-img-top"/>
  <div className="card-body">
    <p className="card-text">{per.name}</p>
    </div>
  </div>
</div>


))







}
</div>
 </div>
  );
}

export default App;
