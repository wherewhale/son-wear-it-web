import React from 'react';
import styled from 'styled-components';
import weatherData from '../../weather/testdata/weatherData.json';
import FashionSelector from '../../lib/utils/FashionSelector';
import FashionBlock from './FashionBlock';

const FashionTablePage = styled.div`
    width 70%;
    margin: auto;
`

function FashionTable(){
    const temp = weatherData[0].temperture;
    const [fashion, setFashion] = React.useState([
        {wear: "Cap"}, {wear: "Tshirts"}, {wear: "Pants"}
    ]);
    React.useEffect(() =>{
        setFashion(FashionSelector(temp));
    }, [])
    return(
        <FashionTablePage>
            <FashionBlock wear={fashion[0].wear}/>
            <FashionBlock wear={fashion[1].wear}/>
            <FashionBlock wear={fashion[2].wear}/>
        </FashionTablePage>
    )
}

export default FashionTable;