import React from 'react';
import { useParams } from "react-router-dom";
import { articles } from '../data/articles';
import '../style/articlepage.css'; // Import CSS file for styling
import {SocialMedia} from '../component/SocialMedia';

export const ArticlePage = () => {
  const params = useParams();
  const id = parseInt(params.id); // Parse id as integer
  const article = articles[0].find(article => article.id === id);

  // Handle case where article with given id is not found
  if (!article) {
    return <div className="article-page">Article not found</div>;
  }


  return (
    <div className='articl-container'>
      <div className="article-page">
        <img src={article.src} alt={article.src}/>
        <h2>{article.title}</h2>
        <div className='article-detail'>
          <div className='socialMedia'>
            <h4><i class="fa-solid fa-user"></i> <span>{article.author}</span></h4>
            <h4><i class="fa-regular fa-calendar-days"></i> {article.date}</h4>
          </div>
          <div className='SMed'>
            <SocialMedia />
          </div> 
        </div>
        <div className='horis-line'></div>
        <p>{article.content}</p>
      </div>
    </div>
  );
};


