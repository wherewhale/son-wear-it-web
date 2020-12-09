import React from 'react';
import styled from 'styled-components';
import weatherData from '../../weather/testdata/weatherData.json';
import GoodsSelector from '../../lib/utils/GoodsSelector';
import GoodsBlock from './GoodsBlock';
import { useSelector } from 'react-redux';
import { RootState } from '../../module';
import Axios from 'axios';

const FashionTablePage = styled.div`
    width 70%;
    margin: auto;
`

function GoodsTable(){
    const loc = useSelector((state : RootState)=>state.location);
    const [weather, setWeather] = React.useState(0);
    React.useEffect(() =>{
        Axios({
            method: 'get',
            url: `http://52.79.236.97:5000/api/weather/${loc.gu}`,
        })
        .then((result) => {
            console.log(result);
            setWeather(GoodsSelector(result.data[0].icon));
        })
        .catch(error => {
            console.error(error);
        })
    }, [])
    return(
        <FashionTablePage>
            <GoodsBlock goods={weather}/>
        </FashionTablePage>
    )
}

export default GoodsTable;