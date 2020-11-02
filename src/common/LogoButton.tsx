import React from 'react';
import styled from 'styled-components';
import InnerLinkButton from './InnerLinkButton';

const LogoImage = styled.div`
    width: 190px;
    height: 190px;
    bacground-color: #fff;
    outline: none;
    border: none;
`

function Logo(){
    return(
        <InnerLinkButton link="/" color="#F6F6F6;" colorHover="#F6F6F6" width={80} height={80}>
            <LogoImage></LogoImage>
        </InnerLinkButton>
    )
}

export default Logo;