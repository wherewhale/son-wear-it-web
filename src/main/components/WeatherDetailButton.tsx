import React from 'react';
import styled from 'styled-components';
import WeatherPin from '../../static/image/WeatherPin.png';
import InnerLinkButton from '../../common/InnerLinkButton';

const ButtonBox = styled.div`
    width: 100px;
    height: 50px;
    position: fixed;
    right: 140px;
    bottom: 100px;
    text-align: center;
    @font-face {
        font-family: 'MaplestoryOTFLight';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/MaplestoryOTFLight.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    .buttonText{
        font-family: 'MaplestoryOTFLight';
        margin-top: 20px;
    }
`

const ButtonIcon = styled.div`
    background-image: url(${WeatherPin});
    width: 70px;
    height: 70px;
    background-size: contain;
    background-repeat: no-repeat;
`

function WeatherDetailButton(){
    return(
        <ButtonBox>
            <InnerLinkButton link="/weather" color="#fff" colorHover="#bfbfbf">
                <ButtonIcon/>
                <div className="buttonText">세부 날씨</div>
            </InnerLinkButton>
        </ButtonBox>
    )    
}

export default WeatherDetailButton;