import React, {PropTypes} from 'react';
import Article from './Article';

export default function ArticleList(props) {
    const {articles} = props;
    const articleComponents = articles.map(article => <li key={article.id}><Article article={article}/></li>);

    return (
        <ul>
            {articleComponents}
        </ul>
    );
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
};