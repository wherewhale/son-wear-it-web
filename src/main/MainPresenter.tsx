import React from 'react';
import styled from 'styled-components';
import InnerLinkButton from '../common/InnerLinkButton';
import NoteBox from './components/NoteBox';
import LocationPinButton from './components/LocationPinButton';
import WeatherDetailButton from './components/WeatherDetailButton';
import LogoButton from '../common/LogoButton';
import FashionModule from './components/FashionModule';
import GoodsModule from './components/GoodsModule';


const MainPage = styled.div`
    width: 100%;
    padding-top: 30px;
    padding-bottom: 150px;
    margin: auto;
`

function MainPresenter(){

    return(
        <MainPage>
            <LogoButton/>
            <div>
            <NoteBox></NoteBox>
            <LocationPinButton/>
            <WeatherDetailButton/>
            </div>
            <GoodsModule/>
            <FashionModule/>
            
        </MainPage>
    )
    
}

export default MainPresenter;