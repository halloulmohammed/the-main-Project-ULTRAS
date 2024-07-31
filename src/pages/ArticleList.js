import React from 'react';
import  '../style/articllist.css';
import {articles}  from '../data/articles';
import { Link } from 'react-router-dom';

export const ArticleList = () => {
  return (
    <div className="article-list">
      <h1 className="page-title">Articles about Ultras</h1>
      <div className='art-container'>
      {articles[0].map(article => (
        <div className="card" key={article.id}>
        <figure className="card__thumb">
        {article.src && <img src={article.src} alt={article.title} className="card__image"/>}
          <figcaption className="card__caption">
            <h2 className="card__title">{article.title}</h2>
            <p className="card__snippet">{article.header}</p>
            <Link to={`/article/${article.id}`} className="card__button">Read More..</Link>
          </figcaption>
        </figure>
      </div>
      ))}
      </div>
    </div>
  );
};

