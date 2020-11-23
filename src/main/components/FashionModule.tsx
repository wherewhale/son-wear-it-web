import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import weatherData from '../../weather/testdata/weatherData.json';
import FashionSelector from '../../lib/utils/FashionSelector';
import {useSelector} from 'react-redux';
import {RootState} from '../../module';
import FashionBoxModule from './FashionBoxModule';
import Axios from 'axios';

const FashionBlock = styled.div
`
    padding-top: 10px;
    margin-bottom: 30px;
    width: 90%;
    margin: auto;
    display: flex;
    @font-face {
        font-family: 'MaplestoryOTFBold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/MaplestoryOTFBold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
`

const LinkButton = styled.div
`
    width: 100px;
    height: 60px;
    font-size: 1.2em;
    font-family: 'MaplestoryOTFBold';
    text-align: center;
    padding-top: 18px;
    border: 1px solid;
    border-radius: 15px;
    cursor: pointer;
    color: #000;
`
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;


function FashionModule() {
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
        <FashionBlock>
            <StyledLink to="/fashion">
                <LinkButton>오늘 패션</LinkButton>
            </StyledLink>
            <FashionBoxModule wear={fashion[0].wear}/>
            <FashionBoxModule wear={fashion[1].wear}/>
            <FashionBoxModule wear={fashion[2].wear}/>
        </FashionBlock>
    );
}

export default FashionModule;