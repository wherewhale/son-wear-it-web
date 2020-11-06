import React from 'react';
import styled from 'styled-components';
import MainNote from '../../static/image/MainNote.png';

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
`

function NoteBox(){
    return(
        <Note>
            <NoteContent>
                안녕! 이건 테스트로 쓰는 글씨란다. 지금부터 너는 이런방식을 이용해서 글을 쓰게 될거야.
            </NoteContent>
        </Note>
    )
}

export default NoteBox;