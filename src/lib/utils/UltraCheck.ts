import React from 'react';

function UltraCheck(dust: number){
    if(dust < 15){
        return("good");
    }
    else if(dust < 30){
        return("soso");
    }
    else{
        return("bad");
    }
}

export default UltraCheck;