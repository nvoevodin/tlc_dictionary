
import React, { Component, Fragment } from "react";
import Navigation from "./navigation"
import Cards from "./card"
import data from '../data/data.json';

class Home extends Component{

    state = {
        entries:[1,2,3]
    }

//     componentDidMount(){

//         this.setState({entries:data})


//   }


    render(){

console.log(this.state.entries)
        
        return(
<Fragment>

    <Navigation/>

    <div  style = {{width:'90%', margin:'0 5%'}}>

{data.map(i => {
    
    return <Cards title = {i['title']} description = {i['description']} address = {i['address']}/>
})}

        

    </div>

    </Fragment>
        )
    }
}

export default Home