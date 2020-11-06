import React from 'react';
import styled from 'styled-components';
import WeatherPin from '../../static/image/WeatherPin.png';
import InnerLinkButton from '../../common/InnerLinkButton';

const ButtonBox = styled.div`
    width: 70px;
    height: 50px;
    position: fixed;
    right: 300px;
    bottom: 100px;
`

const ButtonIcon = styled.div`
    background-image: url(${WeatherPin});
    width: 50px;
    height: 50px;
    background-size: contain;
    background-repeat: no-repeat;
`

function WeatherDetailButton(){
    return(
        <ButtonBox>
            <InnerLinkButton link="/weather" color="#fff" colorHover="#bfbfbf">
                <ButtonIcon/>
                <div>세부 날씨</div>
            </InnerLinkButton>
        </ButtonBox>
    )    
}

export default WeatherDetailButton;