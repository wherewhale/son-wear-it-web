import React from 'react';
import styled from 'styled-components';
import MainNote from '../../static/image/MainNote.png';
import NoteText from '../../lib/utils/NoteText';
import weatherData from '../../weather/testdata/weatherData.json';
import { useSelector } from 'react-redux';
import { RootState } from '../../module';
import Axios from 'axios';

const Note = styled.div`
    width: 512px;
    height: 512px;
    background-image: url(${MainNote});
    margin: auto;
    @font-face {
        font-family: 'MapoFlowerIsland';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/MapoFlowerIslandA.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
`

const NoteContent = styled.div`
    font-size: 1.2em;
    padding: 100px;
    padding-top: 200px;
    line-height: 1.5;
    font-family: 'MapoFlowerIsland';
    text-align: center;
`

function NoteBox(){
    const [noteText, setNoteText] = React.useState('');
    const loc = useSelector((state : RootState)=>state.location);

    React.useEffect(() => {
        Axios({
            method: 'get',
            url: `http://localhost:5000/api/weather/${loc.gu}`,
        })
        .then((result) => {
            console.log(result);
            setNoteText(NoteText(result.data[0].windchill, result.data[0].icon));
        })
        .catch(error => {
            console.error(error);
        })
    }, []);

    return(
        <Note>
            <NoteContent>
                {noteText}<br/><br/>
                마스크는 꼭 잘 쓰고 다니렴!
            </NoteContent>
        </Note>
    )
}

export default NoteBox;