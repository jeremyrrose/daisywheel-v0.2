import React from 'react'
import { updateMagazine } from '../services/ApiMethods.js'
import '../styles/Configuration.css'

class Configuration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color_1: this.props.magazine.color_1,
            color_2: this.props.magazine.color_2,
            color_3: this.props.magazine.color_3,
            color_4: this.props.magazine.color_4
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    changeColors = (e) => {
        e.preventDefault();
        updateMagazine(this.state);
        this.addColors();
    }

    addColors = () => {
        const styleSet = document.documentElement.style;
        styleSet.setProperty("--primary-color", this.state.color_1);
        styleSet.setProperty("--soft-primary-color", this.state.color_2);
        styleSet.setProperty("--secondary-color", this.state.color_3);
        styleSet.setProperty("--highlight-color", this.state.color_4);
      }

    render () {
        return (
            <div className="configuration">
                <form name="colors" onSubmit={(e) => this.changeColors(e)}>            
                    <input type="color" name="color_1" value={this.state.color_1} onChange={(e) => this.changeHandler(e)}></input>            
                    <input type="color" name="color_2" value={this.state.color_2} onChange={(e) => this.changeHandler(e)}></input>            
                    <input type="color" name="color_3" value={this.state.color_3} onChange={(e) => this.changeHandler(e)}></input>            
                    <input type="color" name="color_4" value={this.state.color_4} onChange={(e) => this.changeHandler(e)}></input>
                    <button type="submit">Oh boy</button>
                </form>
            </div>
        )
    }
}

export default Configuration