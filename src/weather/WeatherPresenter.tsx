import React from 'react';
import styled from 'styled-components';
import WeatherDetail from './components/WeatherDetail';
import WeatherGraph from './components/WeatherGraph';

const WeatherPage = styled.div`
    width: 100%;
`

function WeatherPresenter(){
    return(
        <WeatherPage>
            <WeatherDetail/>
            <WeatherGraph/>
        </WeatherPage>
    )

}

export default WeatherPresenter;