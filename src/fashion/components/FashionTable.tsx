import React from 'react';
import styled from 'styled-components';
import weatherData from '../../weather/testdata/weatherData.json';
import FashionSelector from '../../lib/utils/FashionSelector';
import FashionBlock from './FashionBlock';
import { useSelector } from 'react-redux';
import { RootState } from '../../module';
import Axios from 'axios';

const FashionTablePage = styled.div`
    width 70%;
    margin: auto;
`

function FashionTable(){
    const loc = useSelector((state : RootState)=>state.location);
    const [fashion, setFashion] = React.useState([
        {wear: "Cap"}, {wear: "Tshirts"}, {wear: "Pants"}
    ]);
    React.useEffect(() =>{
        Axios({
            method: 'get',
            url: `http://localhost:5000/api/weather/${loc.gu}`,
        })
        .then((result) => {
            console.log(result);
            setFashion(FashionSelector(result.data[0].temperture));
        })
        .catch(error => {
            console.error(error);
        })
    }, []);
    return(
        <FashionTablePage>
            <FashionBlock wear={fashion[0].wear}/>
            <FashionBlock wear={fashion[1].wear}/>
            <FashionBlock wear={fashion[2].wear}/>
        </FashionTablePage>
    )
}

export default FashionTable;