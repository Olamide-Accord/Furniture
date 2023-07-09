import React, { useEffect, useState } from 'react'
import './articles.css';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaCalendarAlt } from 'react-icons/fa'


const index = () => {
  const [article, setArticle] = useState([]);

  const fetchArticles = async() => {
    const response = await fetch('http://localhost:3000/articles');
    const data = await response.json();
    setArticle(data);
    console.log(data)
  }

  useEffect(() => {
    fetchArticles()
  }, [])
  return (
    <section className='articles'>
      <h3 className="title">Enjoy our articles</h3>
      <div className="container">
        <div className="row">
          {
            article.slice(0,3).map((item, index) => {
              const { title, author, content, image, publishedAt} = item;
              return (
                <div key={index} className='article-card'>
                  <div className="img-wrapper">
                    <img src={image} alt={title} />
                  </div>
                  <div className="article-desc">
                    <div className="header">
                      <div className="author">
                        <span>
                          <FaUserAlt />
                        </span>
                        <h6>{author}</h6>
                      </div>
                      <div className="date">
                        <span>
                          <FaCalendarAlt />
                        </span>
                        <h6>{publishedAt}</h6>
                      </div>
                    </div>
                    <div className="body">
                      <h5>{title}</h5>
                      <p>
                        {content}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="btn-container">
          <Link to='/blog' className='btn'>
            read all articles
          </Link>
        </div>
      </div>
    </section>
  )
}

export default index