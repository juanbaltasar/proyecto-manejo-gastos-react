import axios from 'axios';

import { connect } from 'react-redux'

function Operation(props){
    const { Op } = props;
    const url = "https://603c46e8f4333a0017b6755c.mockapi.io/api/Operaciones";
    
    const handleDeleteOperation = () => {
        if(window.confirm("Esta seguro?")){
            const id = Op.Id
            props.deleteOperation(id);
            try {
                axios.delete(url + `/${id}`).catch(null);
            } catch (error) {
                console.log(error)
            }
        }
    }

    return(
        <div className={'Operation' + Op.Id}>
            <div style={{position: 'sticky', border: '1px solid', borderRadius: '5%', margin: 'auto auto'}} className="col-md-9">
                    <input type="hidden" id="Id" value={Op.Id}/>
                    <h1>{Op.TipoOperacion}</h1>
                    <p>{Op.Razon}</p>
                    <p>{Op.Importe}</p>
                    <p>{new Date(Op.Fecha).getDay()}/{new Date(Op.Fecha).getMonth() + 1}/{new Date(Op.Fecha).getFullYear()}</p>
                    <button style={{top: '0', right:'0', position:'absolute'}} onClick={handleDeleteOperation}>Eliminar Operacion</button>
                </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteOperation: (Id) => dispatch({ type:'DELETE_OPERATION',  data:Id})
    }
}

export default connect(null, mapDispatchToProps)(Operation)