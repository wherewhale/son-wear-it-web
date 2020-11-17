import React from 'react';

function FashionSelector(temperture: number){
    if(temperture < 0)
    {
        return([{wear: "Scarf"},{wear: "WinterJacket"},{wear: "Pants"}]);
    }
    else if(temperture >= 0 && temperture < 10)
    {
        return([{wear: "Scarf"},{wear: "Coat"},{wear: "Pants"}]);
    }
    else if(temperture >= 10 && temperture < 20)
    {
        return([{wear: "Cap"},{wear: "Hoodie"},{wear: "Pants"}]);
    }
    else if(temperture >= 20 && temperture < 25)
    {
        return([{wear: "Cap"},{wear: "Tshirts"},{wear: "Pants"}]);
    }
    else{
        return([{wear: "Cap"},{wear: "Tshirts"},{wear: "Shorts"}]);
    }

}

export default FashionSelector