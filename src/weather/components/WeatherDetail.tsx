import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import weatherData from '../testdata/weatherData.json';
import Sunny from '../../static/image/Sunny.png';
import Cloudy from '../../static/image/Cloudy.png';
import Rainy from '../../static/image/Rainy.png';
import fine from '../../static/image/fine.png';
import ultrafine from '../../static/image/ultrafine.png';
import DustCheck from '../../lib/utils/DustCheck';
import UltraCheck from '../../lib/utils/UltraCheck';



const DetailPage = styled.div`
    width: 60%;
    margin: auto;
    padding-top: 150px;
`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Button = styled.div`
    position: fixed;
    padding-top: 10px;
    left: 100px;
    top: 100px;
    width: 80px;
    height: 50px;
    text-align: center;
    border-radius: 10px;
    border: 1px #000 solid;
    cursor: pointer;
`

const WeatherLineBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const TempertureBox = styled.div`
    width: 20%;
    .number{
        color: #4374D9;
        font-size: 1.2em;
    }
`

const TempertureBlock = styled.div`
    font-size: 1.5em;
    width: 100%;
    display: flex;
    justify-content: space-around;
    text-align: center;
`

const IconBox = styled.div`
    width: 160px;
    height: 200px;
    text-align: center;
`

const Icon = styled.div<{
    src: string;
}>`
    background-image: url(${props => props.src});
    background-size: contain;
    background-repeat: no-repeat;
    width: 150px;
    height: 150px;
`

const DustBox = styled.div`
    width: 200px;
    text-align: center;
`

const DustLine = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 80px;
    font-size: 1.2em;
    .good{
        color: #1DDB16; 
    }
    .soso{
        color: #FFBB00;
    }
    .bad{
        color: #FF0000;
    }
`

const DustIcon = styled.div<{
    src: string;
}>
`
    background-image: url(${props => props.src});
    background-size: contain;
    background-repeat: no-repeat;
    width: 60px;
    height: 60px;

`


function WeatherDetail(){

    const [dustText, setDustText] = React.useState('good');
    const [ultraText, setUltraText] = React.useState('good');

    React.useEffect(() => {
        setDustText(DustCheck(weatherData[0].finedust));
        setUltraText(UltraCheck(weatherData[0].ultrafinedust));
    },[]);
    


    if(weatherData[0].icon === "Sunny"){
        return(
            <DetailPage>
                <StyledLink to="/">
                    <Button>뒤로 가기</Button>
                </StyledLink>
                <WeatherLineBlock>
                    <TempertureBox>
                        <TempertureBlock>
                            현재 온도 :
                            <div className="number">{weatherData[0].temperture}</div>
                        </TempertureBlock>
                        <TempertureBlock>
                            체감 온도 :
                            <div className="number">{weatherData[0].windchill}</div>
                        </TempertureBlock>
                    </TempertureBox>
                    <IconBox>
                        <Icon src={Sunny}/>
                        <div>맑음</div>
                    </IconBox>
                    <DustBox>
                        <DustLine>
                            <DustIcon src={fine}/>
                            <div>미세먼지:</div>
                            <div className={dustText}>{weatherData[0].finedust}</div>
                        </DustLine>
                        <DustLine>
                            <DustIcon src={ultrafine}/>
                            <div>초미세먼지:</div>
                            <div className={ultraText}>{weatherData[0].ultrafinedust}</div>
                        </DustLine>
                    </DustBox>
                </WeatherLineBlock>
            </DetailPage>
        );
    }
    else if(weatherData[0].icon === "Cloudy"){
        return(
            <DetailPage>
                <StyledLink to="/">
                    <Button>뒤로 가기</Button>
                </StyledLink>
                <WeatherLineBlock>
                    <TempertureBox>
                        <TempertureBlock>
                            현재 온도 :
                            <div className="number">{weatherData[0].temperture}</div>
                        </TempertureBlock>
                        <TempertureBlock>
                            체감 온도 :
                            <div className="number">{weatherData[0].windchill}</div>
                        </TempertureBlock>
                    </TempertureBox>
                    <IconBox>
                        <Icon src={Cloudy}/>
                        <div>흐림</div>
                    </IconBox>
                    <DustBox>
                        <DustLine>
                            <DustIcon src={fine}/>
                            <div>미세먼지:</div>
                            <div className={dustText}>{weatherData[0].finedust}</div>
                        </DustLine>
                        <DustLine>
                            <DustIcon src={ultrafine}/>
                            <div>초미세먼지:</div>
                            <div className={ultraText}>{weatherData[0].ultrafinedust}</div>
                        </DustLine>
                    </DustBox>
                </WeatherLineBlock>
    
            </DetailPage>
        );
    }
    else{
        return(
            <DetailPage>
                <StyledLink to="/">
                    <Button>뒤로 가기</Button>
                </StyledLink>
                <WeatherLineBlock>
                    <TempertureBox>
                        <TempertureBlock>
                            현재 온도 :
                            <div className="number">{weatherData[0].temperture}</div>
                        </TempertureBlock>
                        <TempertureBlock>
                            체감 온도 :
                            <div className="number">{weatherData[0].windchill}</div>
                        </TempertureBlock>
                    </TempertureBox>
                    <IconBox>
                        <Icon src={Rainy}/>
                        <div>비</div>
                    </IconBox>
                    <DustBox>
                        <DustLine>
                            <DustIcon src={fine}/>
                            <div>미세먼지:</div>
                            <div className={dustText}>{weatherData[0].finedust}</div>
                        </DustLine>
                        <DustLine>
                            <DustIcon src={ultrafine}/>
                            <div>초미세먼지:</div>
                            <div className={ultraText}>{weatherData[0].ultrafinedust}</div>
                        </DustLine>
                    </DustBox>
                </WeatherLineBlock>
    
            </DetailPage>
        );
    }
    
}

export default WeatherDetail;