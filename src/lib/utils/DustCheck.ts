import React from 'react';

function DustCheck(dust: number){
    if(dust < 30){
        return("good");
    }
    else if(dust < 60){
        return("soso");
    }
    else{
        return("bad");
    }
}

export default DustCheck;