import React, { useState } from 'react'
import './ListSong.css'
import { AiOutlineDownload } from 'react-icons/ai'
import { Songs } from '../../Context';
import {  useContext } from 'react'

export default function ListSong() {
    const {DataSongs, handleSetSong} = useContext(Songs)
    const [idSong, setIdSong] = useState(0);
    const handlePlaysong = (idSong) => {
        setIdSong(idSong)
        handleSetSong(idSong)
    }
    return (
        <div className='table-song'>
            <table>
                <thead>
                    <tr style={{backgroundColor: 'rgb(51 65 85)'}}>
                        <th style={{width:'10%', textAlign:'center'}}>#</th>
                        <th style={{width:'60%'}}>Title</th>
                        <th style={{textAlign:'left', width:'20%'}}>Author</th>
                        <th style={{width:'10%', textAlign:'center'}}>
                            <AiOutlineDownload />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {DataSongs.map((song, index) => (
                        <tr className={idSong === song.id ? 'song-active' : 'song-map'}
                            key={index}
                            onClick = {() => handlePlaysong(song.id)}
                        >
                            <td style={{textAlign:'center'}}>{index + 1}</td>
                            <td>{song.name}</td>
                            <td style={{textAlign:'left'}}>{song.author}</td>
                            <td style={{textAlign:'center'}}>
                                
                                    <AiOutlineDownload />
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
