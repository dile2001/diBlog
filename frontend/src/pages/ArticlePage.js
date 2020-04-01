import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import ArticlesList from '../components/ArticlesList';
// import CommentsList from '../components/CommentsList';
// import UpvotesSection from '../components/UpvotesSection';
// import AddCommentForm from '../components/AddCommentForm';
import NotFoundPage from './NotFoundPage';
// import articleContent from './article-content';
const ArticlePage = ({match}) => {
    const name = match.params.name;
    //const article = articleContent.find
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] ,content:''});
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchData();
    }, [name]);
    //if()
    return (
        <>
        <h1>{articleInfo.title}</h1>
        <p>{articleInfo.content}</p>
        {/* {articleInfo.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
        ))} */}
        {/* <CommentsList comments={articleInfo.comments} />
        <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
        <h3>Other Articles:</h3>
        <ArticlesList articles={otherArticles} /> */}
        </>
    );
}
export default ArticlePage;