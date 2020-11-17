import React from 'react';
import styled from 'styled-components';
import Chart from "react-google-charts";
import weatherData from '../testdata/weatherData.json';


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
    return(
        <GraphPage>
            <Chart
            width={'100%'}
            height={'300px'}
            chartType="Bar"
            loader={<div>날씨를 불러오고 있습니다.</div>}
            data={[
                ['시간', '온도'],
                ['0시', weatherData[0].w0],
                ['3시', weatherData[0].w3],
                ['6시', weatherData[0].w6],
                ['9시', weatherData[0].w9],
                ['12시', weatherData[0].w12],
                ['15시', weatherData[0].w15],
                ['18시', weatherData[0].w18],
                ['21시', weatherData[0].w21],
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