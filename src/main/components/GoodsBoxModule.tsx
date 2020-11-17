import React from 'react';
import styled from 'styled-components';
import Mask from '../../static/image/Mask.png';
import Umbrella from '../../static/image/Umbrella.png';
import Sunblock from '../../static/image/Sunblock.png';

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
    goods: number;
}

function GoodsBoxModule({goods}: GoodsProps){
    if(goods === 0){
        return(
            <>
            <GoodsBox>
                <GoodsImage src={Mask}/>
                <div className="goodsText">마스크</div>
            </GoodsBox>
            <GoodsBox>
            <GoodsImage src={Sunblock}/>
                <div className="goodsText">선크림</div>
            </GoodsBox>
            </>
        )
    }
    else if(goods === 1){
        return(
            <GoodsBox>
                <GoodsImage src={Mask}/>
                <div className="goodsText">마스크</div>
            </GoodsBox>
        )
    }
    else{
        return(
            <>
            <GoodsBox>
                <GoodsImage src={Mask}/>
                <div className="goodsText">마스크</div>
            </GoodsBox>
            <GoodsBox>
            <GoodsImage src={Umbrella}/>
                <div className="goodsText">우산</div>
            </GoodsBox>
            </>
        )
    }
}

export default GoodsBoxModule;