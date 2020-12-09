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
import { useSelector } from 'react-redux';
import { RootState } from '../../module';
import Axios from 'axios';



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

    const loc = useSelector((state : RootState)=>state.location);
    const [dust, setDust] = React.useState(0);
    const [ultraDust, setUltraDust] = React.useState(0);
    const [dustText, setDustText] = React.useState('good');
    const [ultraText, setUltraText] = React.useState('good');
    const [temp, setTemp] = React.useState(0);
    const [wind, setWind] = React.useState(0);
    const [icon, setIcon] = React.useState('Sunny');

    React.useEffect(() => {
        Axios({
            method: 'get',
            url: `http://52.79.236.97:5000/api/weather/${loc.gu}`,
        })
        .then((result) => {
            console.log(result);
            setDustText(DustCheck(result.data[0].finedust));
            setUltraText(UltraCheck(result.data[0].ultrafinedust));
            setDust(result.data[0].finedust);
            setUltraDust(result.data[0].ultrafinedust);
            setTemp(result.data[0].temperture);
            setWind(result.data[0].windchill);
            setIcon(result.data[0].icon);
        })
        .catch(error => {
            console.error(error);
        })
    },[]);
    


    if(icon === "Sunny"){
        return(
            <DetailPage>
                <StyledLink to="/">
                    <Button>뒤로 가기</Button>
                </StyledLink>
                <WeatherLineBlock>
                    <TempertureBox>
                        <TempertureBlock>
                            현재 온도 :
                            <div className="number">{temp}</div>
                        </TempertureBlock>
                        <TempertureBlock>
                            체감 온도 :
                            <div className="number">{wind}</div>
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
                            <div className={dustText}>{dust}</div>
                        </DustLine>
                        <DustLine>
                            <DustIcon src={ultrafine}/>
                            <div>초미세먼지:</div>
                            <div className={ultraText}>{ultraDust}</div>
                        </DustLine>
                    </DustBox>
                </WeatherLineBlock>
            </DetailPage>
        );
    }
    else if(icon === "Cloudy"){
        return(
            <DetailPage>
                <StyledLink to="/">
                    <Button>뒤로 가기</Button>
                </StyledLink>
                <WeatherLineBlock>
                    <TempertureBox>
                        <TempertureBlock>
                            현재 온도 :
                            <div className="number">{temp}</div>
                        </TempertureBlock>
                        <TempertureBlock>
                            체감 온도 :
                            <div className="number">{wind}</div>
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
                            <div className={dustText}>{dust}</div>
                        </DustLine>
                        <DustLine>
                            <DustIcon src={ultrafine}/>
                            <div>초미세먼지:</div>
                            <div className={ultraText}>{ultraDust}</div>
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
                            <div className="number">{temp}</div>
                        </TempertureBlock>
                        <TempertureBlock>
                            체감 온도 :
                            <div className="number">{wind}</div>
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
                            <div className={dustText}>{dust}</div>
                        </DustLine>
                        <DustLine>
                            <DustIcon src={ultrafine}/>
                            <div>초미세먼지:</div>
                            <div className={ultraText}>{ultraDust}</div>
                        </DustLine>
                    </DustBox>
                </WeatherLineBlock>
    
            </DetailPage>
        );
    }
    
}

export default WeatherDetail;