import React from "react";

function Square({value, onClickSqure}){
    return(
        <button className="square" onClick={onClickSqure}>{value}</button>
    );
}

export default Square;