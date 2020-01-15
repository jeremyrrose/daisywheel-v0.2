import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/ArticleCard.css'

const ArticleCard = ({image, title, dek, author, date, articleId, published}) => {
    return (
        <div className="articleCard">
            <img src={image} />
            <div className="articleCardInfo">
                <h3>{title}</h3>
                <p className="dek">{dek}</p>
                <p className="authorDate">{author} :: {date}</p>
            </div>
            <div className="cardControls">
                <p>{published ? 'Published' : 'Draft' }</p>
                <Link to={`/edit/articles/${articleId}`}><button>Edit</button></Link>
            </div>
        </div>
    )
}

export default ArticleCard;