import React from "react"
import Api from './assets/Components/Api'


const App = () => {
            console.log('hello')
    return <>
        {
            Api.map((ele) => <h2> {ele.question} </h2> )
            
    }
    </>
}
export default App;