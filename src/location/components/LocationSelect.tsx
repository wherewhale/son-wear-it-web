import React from 'react';
import styled from 'styled-components';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LocationGu from '../../static/data/LocationGu.json';
import {useDispatch,useSelector} from 'react-redux';
import {setLocation} from '../../module/location/actions';
import {RootState} from '../../module';
import {Link} from 'react-router-dom';
import LocationPin from '../../static/image/LocationPin.png';

const LocationDropDownBlock = styled.div
`
    padding-top: 100px;
    width: 50%;
    display: flex;
    justify-content: space-around;
    margin: auto;
    @font-face {
        font-family: 'MaplestoryOTFBold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/MaplestoryOTFBold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
`

const OkButton = styled.div`
    width: 100px;
    height: 60px;
    font-size: 1.2em;
    font-family: 'MaplestoryOTFBold';
    text-align: center;
    padding-top: 18px;
    border: 1px solid;
    border-radius: 15px;
    cursor: pointer;
    color: #000;
`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

const FloatingView = styled.div`
    position: fixed;
    width: 100px;
    height: 70px;
    text-align: center;
    bottom: 150px;
    right: 150px;
`

const LocationTextBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-family: 'MaplestoryOTFBold';
    .text{
        color: #000;
    }
    .location{
        color: #0023FE;
    }
`

const ButtonIcon = styled.div`
    background-image: url(${LocationPin});
    width: 70px;
    height: 70px;
    background-size: contain;
    background-repeat: no-repeat;
`


function LocationSelect() {
    const dispatch = useDispatch();
    const location = React.useCallback((location : string, gu: string) => (
        dispatch(setLocation({ location : location, gu: gu}))
    ), [dispatch]);
    const graphData = LocationGu.map((LocationGu) => {
        return(
            <Dropdown.Item onClick={() => location(`${LocationGu.Gu}`,`${LocationGu.name}`)}>{LocationGu.Gu}</Dropdown.Item>
        );
        }
    );
    const loc = useSelector((state : RootState)=>state.location);
    return(
        <LocationDropDownBlock>
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    {loc.location}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {graphData}
                </Dropdown.Menu>
            </Dropdown>
            <StyledLink to="/">
                <OkButton>
                    변경하기
                </OkButton>
            </StyledLink>
            <FloatingView>
                <ButtonIcon/>
                <LocationTextBox>
                    현 위치: 
                    <div className="location">{loc.location}</div>
                </LocationTextBox>
            </FloatingView>
        </LocationDropDownBlock>
        
    );
}

export default LocationSelect;