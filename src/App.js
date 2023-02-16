import logo from './logo.svg';
import './App.css';

const TitoloCorso = ({nome,anno}) => {
  console.log('Nome', nome)
  return(
    <h1>{`Corso ${nome} ${anno}`} </h1>
  )
}
function App() {
  const corsi =[{
    'id':1,
    'nome':'React',
    anno: '2023'
  },
  {
    'id':2,
    'nome':'Flutter',
    anno: '2022'
  },
  {
    'id':3,
    'nome':'Angular',
    anno: '2024'
  },
]

 return(
  <div className="App">
    {corsi.map((corso)=>{
      return <TitoloCorso nome={corso.nome} anno='2k24'/>
    })
    }
    
    </div>
 );
}

export default App;
