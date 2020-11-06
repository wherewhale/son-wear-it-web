import React from 'react';
import styled from 'styled-components';
import LocationPin from '../../static/image/LocationPin.png';
import InnerLinkButton from '../../common/InnerLinkButton';

const ButtonBox = styled.div`
    width: 70px;
    height: 50px;
    position: fixed;
    right: 300px;
    top: 100px;
`

const ButtonIcon = styled.div`
    background-image: url(${LocationPin});
    width: 50px;
    height: 50px;
    background-size: contain;
    background-repeat: no-repeat;
`

function LocationPinButton(){
    return(
        <ButtonBox>
            <InnerLinkButton link="/location" color="#fff" colorHover="#bfbfbf">
                <ButtonIcon/>
                <div>위치 변경</div>
            </InnerLinkButton>
        </ButtonBox>
    )    
}

export default LocationPinButton;