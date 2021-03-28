import React, { Component } from 'react'
import config from '../../AppConfiguration.json'
import { default as arrow } from '../../img/arrow.svg';
import './DropDownStyle.css'

class DropDownItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isListOpen: false,
            headerTitle: this.props.title
        }
    }

    toggleList = () => {
        this.setState(prevState => ({
            isListOpen: !prevState.isListOpen
        }))
    }
    render() {
        const { isListOpen, headerTitle } = this.state;
        let list = config.actionItems;

        return (
            <div className="dropDown">
                <button type="button" className="dropDownHeader" onClick={this.toggleList}>
                    <div className="dropDownHeaderTitle">{headerTitle}</div>
                    {
                        isListOpen
                            ? <img className="angleUp" src={arrow} alt="error" />
                            : <img className="angleDown" src={arrow} alt="error" />
                    }
                </button>
                {
                    isListOpen && (
                        <div className="listOfActions">
                            {
                                list.map((item) => {
                                    return (
                                        <div className="actionItem" key={item.id}>
                                            <div className={this.props.user.status === item.id ? "actionItemTextEnabled" : "actionItemTextDisabled"}>
                                                {item.title}
                                            </div>
                                        </div>
                                    )

                                })
                            }
                        </div>

                    )
                }
            </div>
        )
    }
}

export default DropDownItems