// import {useState, useEffect} from 'react';
// import axios from 'axios';
import { connect } from 'react-redux'
// const firebase = require("firebase");
// require("firebase/firestore");
// import firebase from 'firebase/app';
// import 'firebase/firestore';


function Header (props) {
    // const firebaseConfig = {
    //     apiKey: "AIzaSyDIPlrwx9lSELXTQ26SLgqCv94Kjn8htqQ",
    //     authDomain: "manejo-finanzas.firebaseapp.com",
    //     projectId: "manejo-finanzas",
    //     storageBucket: "manejo-finanzas.appspot.com",
    //     messagingSenderId: "530664235329",
    //     appId: "1:530664235329:web:a6d947da9cb67e2da0c1c0"
    //   };

    //   if (!firebase.apps.length) {
    //     firebase.initializeApp(firebaseConfig);
    //  }else {
    //     firebase.app(); // if already initialized, use that one
    //  }

    //   const db = firebase.firestore()

    // const [AmountSaved, setAmountSaved] = useState(0);
    // const url = "https://603c46e8f4333a0017b6755c.mockapi.io/api/Operaciones";

    // useEffect(() => {
    //     let resultados 
    //     axios.get(url).then((response) => {resultados = response.data
    //         let AhorroTotal = 0;
    //         for (const res of resultados) {
    //             if (res.EsGasto) {
    //                 AhorroTotal -= Number(res.Importe);
    //             } else {
    //                 AhorroTotal += Number(res.Importe);
    //             }
    //         }
    //         setAmountSaved(AhorroTotal);
    //     })
    // }, []);

    // useEffect(() => {
    //     db.collection("Operations").get().then((res) => {
    //         console.log(res)
    //         res.forEach((doc) => {
    //             console.log(doc.data());
    //         });        
    //     })
    // }, [db]);
    //console.log(props.AmountSaved);

    return(
        <div className="Header">
            <h1 style={{textAlign: 'center'}}>Manejo De Finanzas</h1>
            <h3 style={{width: 'min-content', margin: '5px auto'}}>${props.AmountSaved}</h3>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        AmountSaved: state.AmountSaved
    }
}

export default connect(mapStateToProps)(Header);