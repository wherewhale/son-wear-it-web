import React from 'react';
import styled from 'styled-components';
import InnerLinkButton from '../common/InnerLinkButton';

function FashionPresenter(){
    return(
        <>
            <div>
                패션 확인 페이지입니다.
            </div>
            <InnerLinkButton link="/" width={150} color="#D4F4FA" colorHover="#DAD9FF">
                <div>뒤로가기</div>
            </InnerLinkButton>
        </>
    )

}

export default FashionPresenter;