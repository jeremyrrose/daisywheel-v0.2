import React from 'react';
import Axios from 'axios';
import ArticleForm from './shared/ArticleForm.jsx';
import Api from '../services/ApiConfig.js';

class NewArticle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount = async () => {
        // this.getArticle(this.props.match.params.id);
      }
    
    getArticle = async (id) => {
        fetch(`http://localhost:3000/articles/${id}`)
        .then(response => response.json())
        .then(({
            id,
            title,
            dek,
            content,
            caption,
            credit,
            url,
            published,
            updated_at,
            section_id,
            author_id
        }) => this.setState({
                id,
                title,
                dek,
                content,
                caption,
                credit,
                url,
                published,
                updated_at,
                section_id,
                author_id
            }))
      }
      
    changeHandler = (e) => {
          this.setState({ [e.target.name]: e.target.value })
      }

    wysiwygHandler = (name) => {
        console.log(name)
        const elem = document.getElementById(`${name}`)
        const jpackage = (<>{elem.innerHTML}</>)
        this.setState({ [name]: jpackage })
        console.log(elem.innerHTML);
        elem.innerHTML = this.state[`${name}`];
    }

    createArticle = async (e) => {
        e.preventDefault();
        const articleData = {
            title: this.state.title,
            dek: this.state.dek,
            content: this.state.content,
            // caption: this.state.caption,
            // credit: this.state.credit,
            // url: this.state.url,
            // published: this.state.published,
            // updated_at: this.state.updated_at,
            section_id: this.state.section_id,
            author_id: this.state.author_id
        }
        console.log(articleData)
        try {
            const response = await Api.post('/articles', articleData)
            console.log(response.body)
        } catch (error) {
            console.error(error)
        }
    }

    render () {
        const {
            id,
            title,
            dek,
            content,
            image,
            caption,
            credit,
            url,
            published,
            updated_at,
            section_id,
            author_id
        } = this.state;
        return (
            <ArticleForm             
                id={id}
                title={title}
                dek={dek}
                content={content}
                image={image}
                caption={caption}
                credit={credit}
                url={url}
                published={published}
                updated_at={updated_at}
                section_id={section_id}
                author_id={author_id}
                onChange={this.changeHandler}
                onSubmit={this.createArticle}
                wysiwygHandler={this.wysiwygHandler}
            />
        )
    }
}

export default NewArticle;