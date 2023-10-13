import React, { Component } from 'react';
import './App.css';

class NewsApp extends Component {
  constructor() {
    super();
    this.state = {
      newsData: null,
      error: null,
      selectedArticle: null, // Track the selected article
    };
  }

  componentDidMount() {
    const apiKey = '12d7e0a36ada4b48b50c26a9ff3c0d76'; // Replace with your NewsAPI key
    const url = `https://newsapi.org/v2/top-headlines?country=US&apiKey=${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ newsData: data });
      })
      .catch(error => {
        this.setState({ error: 'An error occurred while fetching news data' });
      });
  }

  onClickButton = (article) => {
    // Set the selected article in the component state
    this.setState({ selectedArticle: article });
  }

  goBackToList = () => {
    // Clear the selected article to go back to the list
    this.setState({ selectedArticle: null });
  }

  renderSelectedArticle() {
    const { selectedArticle } = this.state;
    if (selectedArticle) {
      return (
        <div>
          <button className='backButton' onClick={this.goBackToList}>Back</button>
          <p className='Description'><strong>Description:</strong> {selectedArticle.description}</p>
          <p className='Content'><strong >Content:</strong> {selectedArticle.content}</p>
          <p className='Published'><strong>Published Date:</strong> {selectedArticle.publishedAt}</p>
        </div>
      );
    }
    return null;
  }

  render() {
    const { newsData, error } = this.state;

    return (
      <div>
        <h1 className='topHeadlines'>Top Headlines</h1>
        {error && <p>{error}</p>}
        {newsData && (
          <ul className="newsList">
            {newsData.articles
              .filter(article => article.content && article.url !== 'https://removed.com')
              .map(article => (
                <li className='articleList' key={article.url}>
                  <div className='left'>
                    <h3 className='articleTitle'>{article.title}</h3>
                    <p className='articleAuthor'><strong>Author:</strong> {article.author}</p>
                    {article.urlToImage && (
                      <img className="newsImage" src={article.urlToImage} alt={article.title} />
                    )}
                  </div>
                  <div className='right'>
                    {this.state.selectedArticle === article ? (
                      this.renderSelectedArticle()
                    ) : (
                      <button className='button' onClick={() => this.onClickButton(article)}>Click here for more info</button>
                    )}
                  </div>
                </li>
              ))}
          </ul>
        )}
      </div>
    );
  }
}

export default NewsApp;
