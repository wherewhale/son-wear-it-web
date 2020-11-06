import React from 'react';
import styled from 'styled-components';
import InnerLinkButton from '../common/InnerLinkButton';
import NoteBox from './components/NoteBox';
import LocationPinButton from './components/LocationPinButton';
import WeatherDetailButton from './components/WeatherDetailButton';


const LinkButtonBlock = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
`

const MainPage = styled.div`
    max-width: 960px;
    width: 60%;
    padding-top: 30px;
    padding-bottom: 150px;
    margin: auto;
`

function MainPresenter(){

    return(
        <MainPage>
            <div>
            <h1>아들 이거 입고가!</h1>
            <h3>현재 시간은 {new Date().toLocaleTimeString()} 입니다.</h3>
            <NoteBox></NoteBox>
            <LocationPinButton/>
            <WeatherDetailButton/>
            </div>
            
            <LinkButtonBlock>
                <InnerLinkButton width={130} link="/fashion">
                    <div>
                    패션 페이지
                    </div>
                </InnerLinkButton>
                <InnerLinkButton width={130} link="/location">
                    <div>
                    위치 변경 페이지
                    </div>
                </InnerLinkButton>
                <InnerLinkButton width={130} link="/goods">
                    <div>
                    물품 확인 페이지
                    </div>
                </InnerLinkButton>
                <InnerLinkButton width={130} link="/weather">
                    <div>
                    날씨 확인 페이지
                    </div>
                </InnerLinkButton>
            </LinkButtonBlock>
        </MainPage>
    )
    
}

export default MainPresenter;