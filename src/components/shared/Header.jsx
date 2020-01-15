import React from 'react';
import { getMagazine } from '../../services/ApiMethods.js'
import '../../styles/Header.css'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Daisywheel CMS'
        }
    }

    componentDidMount = async () => {
        this.getInfo();
    }

    getInfo = async () => {
        const magInfo = await getMagazine();
        console.log(magInfo);
        this.setState({
            title: magInfo.title,
            description: magInfo.description 
        })
    }

    render () {
        return (
            <header>
                <h1>{this.state.title}</h1>
                <h5>powered by daisywheel v. 0.1</h5>
            </header>
        )
    }
}

export default Header;