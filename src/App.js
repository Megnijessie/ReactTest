import { useState } from "react";

function App(){
const [todos, setTodos]= useState([
  { tache:"se laver"}, 
  { tache: "manger"}, 
  {tache: "dormir"}
]);

const [valeur, setValeur]= useState("");

  const envoieform = (e) =>{
    e.preventDefault()

    if(valeur==='') return;

    const newTodo = [...todos,{tache:valeur}]
    setTodos(newTodo);
    setValeur('')
  }

  return(
    <div> 
      <h1> test</h1>
      <form onSubmit={envoieform}>
        <input type='text' placeholder="entrez une tache" value={valeur} onChange={e=>setValeur(e.target.value)}/> 
      </form>
     <hr/>
    <h3>Liste des taches</h3>
    {
      todos.map(t => (
        <div>
          {t.tache}
        </div>
      ))
    }
    </div>
  );

} 

export default App;