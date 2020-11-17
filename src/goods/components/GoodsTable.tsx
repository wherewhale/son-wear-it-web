import React from 'react';
import styled from 'styled-components';
import weatherData from '../../weather/testdata/weatherData.json';
import GoodsSelector from '../../lib/utils/GoodsSelector';
import GoodsBlock from './GoodsBlock';

const FashionTablePage = styled.div`
    width 70%;
    margin: auto;
`

function GoodsTable(){
    const icon = weatherData[0].icon;
    const [weather, setWeather] = React.useState(0);
    React.useEffect(() =>{
        setWeather(GoodsSelector(icon));
    }, [])
    return(
        <FashionTablePage>
            <GoodsBlock goods={weather}/>
        </FashionTablePage>
    )
}

export default GoodsTable;