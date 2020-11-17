import React from 'react';
import styled from 'styled-components';
import LocationPin from '../../static/image/LocationPin.png';
import InnerLinkButton from '../../common/InnerLinkButton';
import {useSelector} from 'react-redux';
import {RootState} from '../../module';

const ButtonBox = styled.div`
    width: 150px;
    height: 50px;
    position: fixed;
    right: 115px;
    top: 100px;
    text-align: center;
    @font-face {
        font-family: 'MaplestoryOTFBold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/MaplestoryOTFBold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
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

const LocationTextBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-family: 'MaplestoryOTFBold';
    .text{
        color: #000;
    }
    .location{
        color: #0023FE;
    }
`

const ButtonIcon = styled.div`
    background-image: url(${LocationPin});
    width: 70px;
    height: 70px;
    background-size: contain;
    background-repeat: no-repeat;
`

function LocationPinButton(){
    const loc = useSelector((state : RootState)=>state.location);
    return(
        <ButtonBox>
            <LocationTextBox>
                <div className="text">현 위치: </div>
                <div className="location">{loc.location}</div>
            </LocationTextBox>
            <InnerLinkButton link="/location" color="#fff" colorHover="#bfbfbf">
                <ButtonIcon/>
                <div className="buttonText">위치 변경</div>
            </InnerLinkButton>
        </ButtonBox>
    )    
}

export default LocationPinButton;