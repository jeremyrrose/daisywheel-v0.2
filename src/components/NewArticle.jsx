import React from 'react';
import ArticleForm from './shared/ArticleForm.jsx';
import { createArticle } from '../services/ApiMethods.js';

class NewArticle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            published: false
        }
    }

    componentDidMount = async () => {
      }

    buildArticle = (e) => {
        e.preventDefault();
        const articleData = {
            title: this.state.title,
            dek: this.state.dek,
            content: this.state.content,
            // caption: this.state.caption,
            // credit: this.state.credit,
            // url: this.state.url,
            published: this.state.published,
            // updated_at: this.state.updated_at,
            section_id: this.state.section_id,
            author_id: this.state.author_id
        }
        createArticle(articleData)
        .then(this.props.history.push('/edit/articles'));;
    }

    toggler = (e, componentName) => {
        e.preventDefault();
        if ( componentName === 'draft' && this.state.published === true ) {
            this.setState({published: false});
        }
        if ( componentName === 'publish' && this.state.published === false ) {
            this.setState({published: true});
        }
    }
    
    changeHandler = (e) => {
          this.setState({ [e.target.name]: e.target.value })
      }

    wysiwygHandler = (name) => {
        const elem = document.getElementById(`${name}`)
        this.setState({ [name]: elem.innerHTML })
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
                sections={this.props.magazine.sections}
                author_id={author_id}
                onChange={this.changeHandler}
                toggle={this.toggler}
                onSubmit={this.buildArticle}
                wysiwygHandler={this.wysiwygHandler}
            />
        )
    }
}

export default NewArticle;