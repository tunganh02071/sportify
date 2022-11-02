import React, { useContext } from 'react'
import { Songs } from '../../Context'
import './Title.css'

export default function Title() {
    const song = useContext(Songs)
    console.log(song.song.name)
    return (
        <div className='content'>
            <span className='top-info'>
                <h1>Now Playing</h1>
                <p className='name-song'>{song.song.name}</p>
            </span>
            <div className='information'> 
                <img src={song.song.links.images[0].url} alt='title' className='author-image'></img>
                <div className='botton'>
                    <img src={song.song.links.images[1].url} alt='describe' className='describe'></img>
                    <p className='author'>{song.song.author}</p>
                </div>

            </div>

        </div>
    )
}
