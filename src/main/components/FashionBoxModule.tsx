import React from 'react';
import styled from 'styled-components';
import Cap from '../../static/image/Cap.png';
import Coat from '../../static/image/Coat.png';
import Hoodie from '../../static/image/Hoodie.png';
import Pants from '../../static/image/Pants.png';
import Scarf from '../../static/image/Scarf.png';
import Shorts from '../../static/image/Shorts.png';
import Tshirts from '../../static/image/Tshirts.png';
import WinterJacket from '../../static/image/WinterJacket.png';

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

interface GoodsProps{
    wear: string;
}

function GoodsBoxModule({wear}: GoodsProps){
    if(wear === "Cap"){
        return(
            <GoodsBox>
                <GoodsImage src={Cap}/>
                <div className="goodsText">모자</div>
            </GoodsBox>
        )
    }
    else if(wear === "Coat"){
        return(
            <GoodsBox>
                <GoodsImage src={Coat}/>
                <div className="goodsText">코트</div>
            </GoodsBox>
        )
    }
    else if(wear === "Hoodie"){
        return(
            <GoodsBox>
                <GoodsImage src={Hoodie}/>
                <div className="goodsText">후드티</div>
            </GoodsBox>
        )
    }
    else if(wear === "Pants"){
        return(
            <GoodsBox>
                <GoodsImage src={Pants}/>
                <div className="goodsText">긴바지</div>
            </GoodsBox>
        )
    }
    else if(wear === "Scarf"){
        return(
            <GoodsBox>
                <GoodsImage src={Scarf}/>
                <div className="goodsText">목도리</div>
            </GoodsBox>
        )
    }
    else if(wear === "Shorts"){
        return(
            <GoodsBox>
                <GoodsImage src={Shorts}/>
                <div className="goodsText">반바지</div>
            </GoodsBox>
        )
    }
    else if(wear === "Tshirts"){
        return(
            <GoodsBox>
                <GoodsImage src={Tshirts}/>
                <div className="goodsText">티셔츠</div>
            </GoodsBox>
        )
    }
    else{
        return(
            <GoodsBox>
                <GoodsImage src={WinterJacket}/>
                <div className="goodsText">패딩</div>
            </GoodsBox>
        )
    }
}

export default GoodsBoxModule;