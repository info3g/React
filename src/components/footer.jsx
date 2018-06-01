import React from 'react'

export default class Footer extends React.Component {
    render() {
        return (
            <div className='footer relative center-children'>
                <div className='scroll-top' onClick={this.handleClick}>
                    <span className="fas fa-arrow-up"></span>
                </div>
            
            </div>
        )
    }

    handleClick = () => {
        window.scroll({top: 0, left: 0, behavior: 'smooth'});
    }
}