import { connect } from 'react-redux'

import Operation from '../Operation'

function OperationsList(props) {
    // const url = "https://603c46e8f4333a0017b6755c.mockapi.io/api/Operaciones";

    // const [OperationsData, setOperationsData] = useState([]);

    // useEffect(() => {
    //     axios.get(url).then((response) => {
    //         setOperationsData(response.data);
    //         })
    // }, []);

    

    return(
        <div className="OperationsList">
            {props.Operations.map(Op => {
                console.log(Op);
                return (<Operation key={Op.id} Op = {Op}/>)
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        Operations: state.Operations
    }
}

export default connect(mapStateToProps)(OperationsList)