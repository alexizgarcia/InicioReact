import React,{Component} from 'react'

class Estilos2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
    let age=40;
     
    const titulo={        
        textAlign:'center',
        color:'green',
        backgroundColor: age>=37 ? 'black' : 'red'        
    }          
        return ( 
            <>
         <h1 style={titulo}>SOY UN TÍTULO</h1>
            </>
         );
    }
}
 
export default Estilos2;