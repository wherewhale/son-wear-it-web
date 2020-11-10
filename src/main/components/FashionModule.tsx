import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Coat from '../../static/image/Coat.png';
import Scarf from '../../static/image/Scarf.png';
import Pants from '../../static/image/Pants.png';

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

function FashionModule() {
    return(
        <FashionBlock>
            <StyledLink to="/fashion">
                <LinkButton>오늘 패션</LinkButton>
            </StyledLink>
            <GoodsBox>
                <GoodsImage src={Coat}/>
                <div className="goodsText">코트</div>
            </GoodsBox>
            <GoodsBox>
                <GoodsImage src={Scarf}/>
                <div className="goodsText">목도리</div>
            </GoodsBox>
            <GoodsBox>
                <GoodsImage src={Pants}/>
                <div className="goodsText">긴바지</div>
            </GoodsBox>
        </FashionBlock>
    );
}

export default FashionModule;