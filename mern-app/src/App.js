import React, { Component } from 'react';
import './App.css';
import ShowBookList from "./components/ShowBookList";
import CreateBook from "./components/CreateBook";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import UpdateBookInfo from "./components/UpdateBookInfo";
import showBookDetails from "./components/ShowBookDetails";

class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path='/' element={<ShowBookList/>} />
                    <Route path='/create-book' element={<CreateBook/>} />
                    <Route path='/edit-book/:id' element={<UpdateBookInfo/>} />
                    <Route path='/show-book/:id' element={<showBookDetails/>} />
                </Routes>
            </Router>
        );
    }
}

export default App;
