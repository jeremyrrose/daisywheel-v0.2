import React from 'react';
import { getArticlesToEdit } from '../services/ApiMethods.js'
import ArticleCard from './shared/ArticleCard.jsx'
import '../styles/Articles.css'

class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        this.setArticles();
    }

    setArticles = async () => {
        const articles = await getArticlesToEdit();
        this.setState({
            articles: articles
        })
    }

    render() {
        const articleCards = this.state.articles.map((article, index) => {
            return (<ArticleCard
                key={index}
                articleId={article.id}
                image={article.image}
                title={article.title}
                dek={article.dek}
                author={article.author.name}
                date={article.created_at}
                published={article.published}
                />)
        });

        return (
            <div className="articleList">
                <h2>Articles</h2>
                {articleCards}
            </div>
        )
    }
}

export default Articles