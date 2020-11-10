import React from 'react';
import styled from 'styled-components';
import InnerLinkButton from '../common/InnerLinkButton';
import LocationSelect from './components/LocationSelect';
import LogoButton from '../common/LogoButton';


const LocationPage = styled.div`
    width: 100%;
`

function LocationPresenter(){

    return(
        <LocationPage>
            <LogoButton/>
            <LocationSelect/>
        </LocationPage>
    )

}

export default LocationPresenter;