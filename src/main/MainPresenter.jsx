import React from 'react';
import styled from 'styled-components';
import InnerLinkButton from '../common/InnerLinkButton';

const LinkButtonBlock = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
`

function MainPresenter(){

    return(
        <>
            <div>
            <h1>아들 이거 입고가!</h1>
            <h3>현재 시간은 {new Date().toLocaleTimeString()} 입니다.</h3>
            </div>
            <LinkButtonBlock>
                <InnerLinkButton width={130} link="/fashion">
                    패션 페이지
                </InnerLinkButton>
                <InnerLinkButton width={130} link="/location">
                    위치변경 페이지
                </InnerLinkButton>
                <InnerLinkButton width={130} link="/goods">
                    물품확인 페이지
                </InnerLinkButton>
                <InnerLinkButton width={130} link="/weather">
                    날씨 확인 페이지
                </InnerLinkButton>
            </LinkButtonBlock>
        </>
    )
    
}

export default MainPresenter;