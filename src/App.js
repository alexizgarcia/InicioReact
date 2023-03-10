import { Fragment } from 'react';
/* import PrimerComponente from './components/PrimerComponente.jsx'
import State from './components/State.jsx'
import Estilos from './path/Estilos.jsx'
import Props from './components/Props.js'
import Estilos2 from './path/Estilos2.jsx';
import Refs from './path/Refs.jsx'; */
import CicloVidaComponentes from './components/CicloVidaComponentes.jsx'
const lista= ['pera ','manzana ', 'uva ']

function App() {
  return (
    <Fragment>
     {/* <PrimerComponente 
       
     /> */}
     {/*  <Props 
      /* nombre ={lista} 
      /> */}
      {/* <State /> */}

      {/* <Estilos /> */}
      {/* <Estilos2 />   */} 
       {/*  <Refs />  */}  
       <CicloVidaComponentes />
      </Fragment>
  );
}

export default App;
