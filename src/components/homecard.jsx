import React from 'react'
import Moviecard from './Moviecard.jsx'

const nullw500 = require('../images/nullw500.png');

export default class Homecard extends React.Component {
    render() {
        const data = this.props.data.display
        return (
            <div className='grid-home'>
                {data.map((movie, i) => {
                    return <Item key={i} data={movie} give={this.handleClick}/>
                })}
            </div>
        )
    }

    handleClick = (data) => {
        this
            .props
            .give(data)
    }
}

class Item extends React.Component {
    handleClick = () => {
        this
            .props
            .give(this.props.data)
    }

    render() {
        const data = this.props.data
        return (
            <div className='infos-container relative' onClick={this.handleClick}>
                <img src={data.poster == null ? `${nullw500}` : `https://image.tmdb.org/t/p/w500${data.poster}`} alt='movie-poster'/>
                <div className='infos-box'>
                    <div className='infos-one'>{`${data.month} ${data.day} ${data.year}`}</div>
                    <div className='infos-two'>{data.title}</div>
                    <div className='infos-three'>
                        <span className='far fa-star'></span>
                        <span>{data.vote}</span>
                    </div>
                </div>
            </div>
        )
    }
}