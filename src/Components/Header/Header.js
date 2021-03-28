import React, {Component} from 'react'
import './Header.css'
import config from '../../AppConfiguration.json'
import LoadUsers from '../Users/LoadAndShowUsers';

class GetHeader extends Component{
    constructor(props){
        super(props);
        this.state = {
            PageType : config.type
        };
    }

    changePageType(newType){
        this.setState(state => ({
            PageType: newType,
        
        }));
        config.type = newType;
    }

    render() {
        return (
            <><ul className='header-ul'>
                <li className='header-li'><a className={this.state.PageType === 3 ? "active" : "unactive"} href="#" onClick={() => this.changePageType(3)}>Все</a></li>
                <li className='header-li'><a className={this.state.PageType === 1 ? "active" : "unactive"} href="#" onClick={() => this.changePageType(1)}>Заблокированные</a></li>
                <li className='header-li'><a className={this.state.PageType === 0 ? "active" : "unactive"} href="#" onClick={() => this.changePageType(0)}>Активные</a></li>
            </ul>
            <LoadUsers/></>
        )
    }
}

export default GetHeader

