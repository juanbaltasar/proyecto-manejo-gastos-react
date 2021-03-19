import './App.css';

import axios from 'axios'

import { useEffect } from 'react'
import { connect } from 'react-redux'

import Header from './Components/Header'
import OperationsList from './Components/OperationList'

//import Routes from './routes'
function App(props) {
  const url = "https://603c46e8f4333a0017b6755c.mockapi.io/api/Operaciones";

  useEffect(() => {
    let operations
    axios.get(url).then((response) => {
      operations = response.data
      for (const op of operations) {
        props.addOperation(op);
        if (op.EsGasto) {
            props.substractToAmountSaved(Number(op.Importe));
        } else {
            props.addToAmountSaved(Number(op.Importe));
        }
      }
    })
  }, [])
//   useEffect(() => {
//     for (const op of props.Operations) {
//         if (op.EsGasto) {
//             substractToAmountSaved(Number(op.Importe));
//         } else {
//             addToAmountSaved(Number(op.Importe));
//         }
//     }
// },[props.Operations])

  return (
    <div className="App">
      <Header/>
      <OperationsList />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    Operations: state.Operations,
    AmountSaved: state.AmountSaved 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addOperation: (operation) => dispatch({ type:'ADD_OPERATION', data:operation }),
    addToAmountSaved: (Amount) => dispatch({type:'ADD_AMOUNTSAVED', data:Amount}),
    substractToAmountSaved: (Amount) => dispatch({type:'SUBSTRACT_AMOUNTSAVED', data:Amount})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
