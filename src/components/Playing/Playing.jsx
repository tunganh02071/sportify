import React, { useContext } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from '../../Context';
import './Playing.css'

export default function Playing() {
    const {song, handleSetSong} = useContext(Songs)
    const handelClickNext = () => {
        handleSetSong(song.id +1)
    }
    const handelClickPrev = () => {
        handleSetSong(song.id -1)
    }
    return (
        <div className='audio'>
            <AudioPlayer 
                src={song.url}
                className='playing-music' 
                showSkipControls={true} 
                showJumpControls={false} 
                onClickNext={handelClickNext}
                onClickPrevious={handelClickPrev}
            />
        </div>
    )
}
