import React from "react";

import {Cards,Chart,CountryPicker} from './components'
import styles from "./App.module.css";
import {fetchData} from "./api";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

class App extends React.Component{

    state = {
        data:{},
        country:"",
    }

    async componentDidMount(){
        const fetchedData = await fetchData();

       this.setState({data:fetchedData});
        
    }

    handleCountryChange = async(country) =>{
        const fetchedData = await fetchData(country);

        this.setState({data:fetchedData,country:country});

        console.log(fetchedData);
        
    }
    render(){
        const {data , country} = this.state;

        return(
            <div>
            <Navbar/>
            <div className={styles.container}>
               <Cards data={data}/>
               <CountryPicker handleCountryChange={this.handleCountryChange}/>
               <Chart data={data} country={country}/>
           </div>
           <Footer/>
           </div>
        );
    }
}

export default App;