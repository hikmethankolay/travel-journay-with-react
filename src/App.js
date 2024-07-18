import React from "react";
import Place from "./components/Place";
import Header from "./components/Header";
import Info from "./data"
import "./index.css"

function App() {
    const places = Info.map(place => {
        return(
            <Place 
            key = {place.id}
            {...place}
        />
        )
    })
    return (
        <div className="app">
            <Header/>
            {places}
        </div>
    );
}

export default App;