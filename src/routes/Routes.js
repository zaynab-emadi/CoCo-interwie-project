import React from "react";
import {Routes , BrowserRouter , Route} from "react-router-dom";
import {List , Detail , NoMatch} from "../pages/index";

function Rout(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ List}/>
                <Route path="/detail/:userId" element={ Detail}/>
                <Route path="*" element={NoMatch}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rout