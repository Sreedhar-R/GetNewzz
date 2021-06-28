import React, { Component, useState, useEffect} from "react";
import "../styles/App.css";
import Header from "./Header";
import Cardlist from "./Cardlist";
import Pagination from "./Pagination";
import {Route, Redirect, Switch} from 'react-router-dom';




const App = () => {
    const [input,setInput] = useState("");
    const [search,setSearch] = useState("India");
    const [data,setData] = useState([]);
    const [lang, setlang] = useState("en");
    const [error, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(3);

    // let baseUrl = `https://gnews.io/api/v4/q=${search}?token=97f8f39d9eaab08d4e29de5307994d15&lang=${lang}` ;

    useEffect(() => {
        makeApiCall();
        // console.log(data);
    },[search, lang])

    const makeApiCall = () => {
        fetch(`https://gnews.io/api/v4/search?q=${search}&token=97f8f39d9eaab08d4e29de5307994d15&lang=${lang}`)
            .then(res => res.json())
            .then(result => setData(result.articles))
            .catch(error => setError(true))
    }

    const searchChange = (e) => {
        setInput(e.target.value);
        e.target.value="";
    }

    const buttonClick = () => {
        setSearch(input);
        // makeApiCall();
        // console.log(data);
    }

    const changeLanguage = lang =>{
        setlang(lang);
    }

    //Get Current Post
    const indexOfLastPost = currentPage*postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage ;
    const currentPost = data.slice(indexOfFirstPost,indexOfLastPost) ;

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const prevButton = prev => {
        if(currentPage > 1){
            setCurrentPage(prev - 1);
        }
    }
    const nextButton = next => {
        if(currentPage < 3){
            setCurrentPage(next + 1);
        }
    }
    

  return (
    <div id="main">
        <Header onSearchChange={searchChange} onButtonClick={buttonClick} changeLanguage={changeLanguage}/>
        <div className="d-flex container flex-wrap justify-content-around ">
            <button id="Prev" type="button" disabled={currentPage==1} class="btn btn-primary mt-2 me-2" onClick={() => prevButton(currentPage)}>Prev</button>
            <button id="Next" type="button" disabled={currentPage==3} class="btn btn-primary mt-2" onClick={() => nextButton(currentPage)}>Next</button>
        </div>
        <Switch>
            <Route path='/hi' render={(props) => <Cardlist {...props} news={currentPost} lang={lang}/>} />
            <Route path='/mr' render={(props) => <Cardlist {...props} news={currentPost} lang={lang}/>}/>
            <Route path='/' render={(props) => <Cardlist {...props} news={currentPost} lang={lang}/>}/>
            <Redirect exact to='/' />
        </Switch>
        
        {/* <Cardlist news={currentPost}/> */}
        <div className="pagination">
            <Pagination paginate={paginate}/>
        </div>
    </div>
  )
};

export default App;