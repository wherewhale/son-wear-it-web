import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Mask from '../../static/image/Mask.png';
import Umbrella from '../../static/image/Umbrella.png';

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

const GoodsBox = styled.div`
    width: 90px;
    text-align: center;
    @font-face {
        font-family: 'MaruBuri-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/MaruBuri-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    .goodsText{
        font-family: 'MaruBuri-Regular';
        color: #bfbfbf;
        margin-left: 30px;
    }
`

const GoodsImage = styled.div<{
    src: string;
}>
`
    margin-left: 30px;
    width: 60px;
    height: 60px;
    background-image: url(${props => props.src});
    background-size: contain;
    background-repeat: no-repeat;
`

function GoodsModule() {
    return(
        <GoodsBlock>
            <StyledLink to="/goods">
                <LinkButton>필요 물품</LinkButton>
            </StyledLink>
            <GoodsBox>
                <GoodsImage src={Mask}/>
                <div className="goodsText">마스크</div>
            </GoodsBox>
            <GoodsBox>
                <GoodsImage src={Umbrella}/>
                <div className="goodsText">우산</div>
            </GoodsBox>
        </GoodsBlock>
    );
}

export default GoodsModule;