import React, { useEffect } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Mask from '../../static/image/Mask.png';
import Umbrella from '../../static/image/Umbrella.png';
import GoodsBoxModule from './GoodsBoxModule';
import GoodsSelector from '../../lib/utils/GoodsSelector';
import weatherData from '../../weather/testdata/weatherData.json';

const GoodsBlock = styled.div
`
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

function GoodsModule() {
    const [good, setGood] = React.useState(0);

    useEffect(() => {
        setGood(GoodsSelector(weatherData[0].icon));
    },[])

    return(
        <GoodsBlock>
            <StyledLink to="/goods">
                <LinkButton>필요 물품</LinkButton>
            </StyledLink>
            <GoodsBoxModule goods={good}/>
        </GoodsBlock>
    );
}

export default GoodsModule;