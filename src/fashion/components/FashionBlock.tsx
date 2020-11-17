import React from 'react';
import styled from 'styled-components';
import Cap from '../../static/image/Cap.png';
import Coat from '../../static/image/Coat.png';
import Hoodie from '../../static/image/Hoodie.png';
import Pants from '../../static/image/Pants.png';
import Scarf from '../../static/image/Scarf.png';
import Shorts from '../../static/image/Shorts.png';
import Tshirts from '../../static/image/Tshirts.png';
import WinterJacket from '../../static/image/WinterJacket.png';


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
    wear: string;
}

function FashionBlock({wear}: FashionBlockProps){
    if(wear === "Cap"){
        return(
            <FashionLine>
                <IconBlock>
                    <Icon src={Cap}/>
                    <div>모자</div>
                </IconBlock>
                
                <Text>
                    햇빛으로 인한 피부손상이 생각보다 굉장히 심각하다는 사실을 알고 계신가요?<br/> 피부손상을 막고 스타일까지 낼 수 있는 모자를 쓰고 나가보세요!
                </Text>
            </FashionLine>
        );
    }
    else if(wear === "Coat"){
        return(
            <FashionLine>
                <IconBlock>
                    <Icon src={Coat}/>
                    <div>코트</div>
                </IconBlock>
                <Text>
                    너무 춥진 않지만 그렇다고 너무 춥게 입고나가면 안돼요!!<br/>
                    이런 날씨엔 차가운 느낌을 내면서도 내면은 따뜻한 코트를 통한 코디를 추천드립니다. :D
                </Text>
            </FashionLine>
        );
    }
    else if(wear === "Hoodie"){
        return(
            <FashionLine>
                <IconBlock>
                    <Icon src={Hoodie}/>
                    <div>후드티 or 맨투맨</div>
                </IconBlock>
                <Text>
                    이런 날씨에 반팔티를 입겠다구요? 저라면 그러지 않겠어요..!!<br/>
                    보온은 생명입니다. 물론 중간에 더워질 순 있지만, 여러분의 몸은 금새 춥다고 느낄 수 있어요!<br/>
                    후드티나 맨투맨을 통해 중간에 쌀쌀해지더라도 체온을 유지해주세요.
                </Text>
            </FashionLine>
        );
    }
    else if(wear === "Pants"){
        return(
            <FashionLine>
                <IconBlock>
                    <Icon src={Pants}/>
                    <div>긴 바지</div>
                </IconBlock>
                <Text>
                    청바지, 면바지, 슬랙스 등 뭐든 좋아요!<br/>
                    긴 바지는 기본 코디의 시작입니다. 그래도 너무 딱 달라붙는 옷은 지양하도록 해요 ㅎㅎ..<br/>
                    우리의 다리는 딱 달라붙는 바지를 싫어해요 ㅠㅠ
                </Text>
            </FashionLine>
        );
    }
    else if(wear === "Scarf"){
        return(
            <FashionLine>
                <IconBlock>
                    <Icon src={Scarf}/>
                    <div>목도리</div>
                </IconBlock>
                <Text>
                    무슨 목도리냐구요? 모르는 소리!<br/>
                    우리의 체온이 가장 많이 손실되는 곳이 어딘지 아시나요?<br/>
                    바로 뒷목입니다. (뒷목잡는 소리) <br/>
                    춥다고 느끼는 이 날씨에 목도리를 통해 코디한다면 당신은 패션리더!
                </Text>
            </FashionLine>
        );
    }
    else if(wear === "Shorts"){
        return(
            <FashionLine>
                <IconBlock>
                    <Icon src={Shorts}/>
                    <div>반바지</div>
                </IconBlock>
                <Text>
                    덥다 더워..!! <br/>
                    이런 날엔 반드시 통풍이 잘되는 바지를 입어야 해요!<br/>
                    싫다구요? 안돼요 안돼!<br/>
                    쪄 죽는다고 앓지 말고 지금 반드시 챙겨입어요! 반드시!
                </Text>
            </FashionLine>
        );
    }
    else if(wear === "Tshirts"){
        return(
            <FashionLine>
                <IconBlock>
                    <Icon src={Tshirts}/>
                    <div>반팔티</div>
                </IconBlock>
                <Text>
                    덥다고 느낄 수 있는 날씨네요!<br/>
                    이런날엔 두꺼운 옷보다는 간편한 티셔츠를 입어보는건 어때요?<br/>
                    바람이 불 땐 자유로움까지 느낄 수 있을거에요 :)
                </Text>
            </FashionLine>
        );
    }
    else{
        return(
            <FashionLine>
                <IconBlock>
                    <Icon src={WinterJacket}/>
                    <div>패딩</div>
                </IconBlock>
                <Text>
                    비상이에요 비상! <br/>
                    오늘은 영하까지 떨어지고 체감온도는 더 낮아요!<br/>
                    여름엔 덥게, 겨울엔 춥게~ 는 다 거짓말이에요!<br/>
                    무조건 따뜻하게 입으세요! 무.조.건.
                </Text>
            </FashionLine>
        );
    }

}

export default FashionBlock;