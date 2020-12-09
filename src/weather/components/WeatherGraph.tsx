import React from 'react';
import styled from 'styled-components';
import Chart from "react-google-charts";
import Axios from 'axios';
import { RootState } from '../../module';
import { useSelector } from 'react-redux';


const GraphPage = styled.div`
    width: 60%;
    border-top: #bfbfbf 2px solid;
    padding-top: 50px;
    margin-top: 50px;
    margin: auto;
    text-align: center;
    padding-left: 50px;
`

function WeatherGraph(){
    const loc = useSelector((state : RootState)=>state.location);
    const [w0, setW0] = React.useState(0);
    const [w3, setW3] = React.useState(0);
    const [w6, setW6] = React.useState(0);
    const [w9, setW9] = React.useState(0);
    const [w12, setW12] = React.useState(0);
    const [w15, setW15] = React.useState(0);
    const [w18, setW18] = React.useState(0);
    const [w21, setW21] = React.useState(0);

    React.useEffect(() => {
        Axios({
            method: 'get',
            url: `http://52.79.236.97:5000/api/weather/${loc.gu}`,
        })
        .then((result) => {
            console.log(result);
            setW0(result.data[0].w0);
            setW3(result.data[0].w3);
            setW6(result.data[0].w6);
            setW9(result.data[0].w9);
            setW12(result.data[0].w12);
            setW15(result.data[0].w15);
            setW18(result.data[0].w18);
            setW21(result.data[0].w21);
        })
        .catch(error => {
            console.error(error);
        })
    },[]);
    return(
        <GraphPage>
            <Chart
            width={'100%'}
            height={'300px'}
            chartType="Bar"
            loader={<div>날씨를 불러오고 있습니다.</div>}
            data={[
                ['시간', '온도'],
                ['0시', w0],
                ['3시', w3],
                ['6시', w6],
                ['9시', w9],
                ['12시', w12],
                ['15시', w15],
                ['18시', w18],
                ['21시', w21],
            ]}
            options={{
                // Material design options
                chart: {
                title: '오늘의 날씨',
                },
            }}
            // For tests
            rootProps={{ 'data-testid': '2' }}
            />
        </GraphPage>
    )
}

export default WeatherGraph;