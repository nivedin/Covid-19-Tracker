import React from "react";

import {Cards,Chart,CountryPicker} from './components'
import styles from "./App.module.css";
import {fetchData} from "./api";

import Header from "./components/Header";
import Footer from "./components/Footer";

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
            <div className={styles.container}>
               <Header/>
               <Cards data={data}/>
               <CountryPicker handleCountryChange={this.handleCountryChange}/>
               <Chart data={data} country={country}/>
                <Footer/>
           </div>
        );
    }
}

export default App;