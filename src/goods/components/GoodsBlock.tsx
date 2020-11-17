import React from 'react';
import styled from 'styled-components';
import Mask from '../../static/image/Mask.png';
import Sunblock from '../../static/image/Sunblock.png';
import Umbrella from '../../static/image/Umbrella.png';



const FashionLine = styled.div`
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    border-top: 1px #bfbfbf solid;
`

const IconBlock = styled.div`
    width: 120px;
    height: 120px;
    text-align: center;
    padding-top: 20px;
`

const Icon = styled.div<{
    src: string;
}>
`
    margin-auto;
    padding-right: 50px;
    width: 100px;
    height: 100px;
    background-image: url(${props => props.src});
    background-size: contain;
    background-repeat: no-repeat;
`

const Text = styled.div`
    @font-face {
        font-family: 'JSDongkang-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/JSDongkang-RegularA1.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    font-family: 'JSDongkang-Regular';
    padding-top: 20px;
    width: 60%;
    font-size: 1.2em;
`

interface FashionBlockProps{
    goods: number;
}

function FashionBlock({goods}: FashionBlockProps){
    if(goods === 0){
        return(
            <>
                <FashionLine>
                    <IconBlock>
                        <Icon src={Mask}/>
                        <div>마스크</div>
                    </IconBlock>
                    <Text>
                        코로나 19는 끝나지 않았습니다.<br/>
                        우리는 함께 이겨낼 것입니다.
                    </Text>
                </FashionLine>
                <FashionLine>
                <IconBlock>
                    <Icon src={Sunblock}/>
                    <div>선크림</div>
                </IconBlock>
                <Text>
                    햇빛으로 인한 피부손상이 생각보다 굉장히 심각하다는 사실을 알고 계신가요?<br/> 
                    피부손상을 막기 위한 선크림은 여러분에게 피부를 보호하는 막을 선물할 거에요!
                </Text>
                </FashionLine>
            </>
        );
    }
    if(goods === 1){
        return(
                <FashionLine>
                    <IconBlock>
                        <Icon src={Mask}/>
                        <div>마스크</div>
                    </IconBlock>
                    <Text>
                    코로나 19는 끝나지 않았습니다.<br/>
                        우리는 함께 이겨낼 것입니다.
                    </Text>
                </FashionLine>
        );
    }
    else{
        return(
            <>
                <FashionLine>
                    <IconBlock>
                        <Icon src={Mask}/>
                        <div>마스크</div>
                    </IconBlock>
                    <Text>
                    코로나 19는 끝나지 않았습니다.<br/>
                        우리는 함께 이겨낼 것입니다.
                    </Text>
                </FashionLine>
                <FashionLine>
                    <IconBlock>
                        <Icon src={Umbrella}/>
                        <div>우산</div>
                    </IconBlock>
                    <Text>
                        비가 올 것으로 예상되네요!<br/>
                        우산을 꼭 챙겨서 비를 맞지 않길 바라요~!
                    </Text>
                </FashionLine>
            </>
        );
    }
    

}

export default FashionBlock;