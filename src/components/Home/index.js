import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import "./index.css"

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      loading: true,
      categoryDetails: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = () => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ categories: data, loading: false });
        this.fetchCategoryDetails();
      })
      .catch((error) => {
        console.error('Error fetching product categories:', error);
        this.setState({ loading: false });
      });
  };

  fetchCategoryDetails = async () => {
    const { categories } = this.state;
    const categoryDetails = await Promise.all(
      categories.map(async (category) => {
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        const categoryData = await response.json();
        return categoryData;
      })
    );
    this.setState({ categoryDetails });
  };

  handleClickAddToCart = (product) => {
    this.props.handleAddToCart(product);
  };

  render() {
    const { loading, categories, categoryDetails } = this.state;

    return (
      <div>
        <Header />
        <div className='homepage'>
          
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="categories">
              {categoryDetails.map((categoryData, index) => (
                <div key={index}>
                  <h2 className='heading'>{categories[index]}</h2>
                  <ul className="categoriesList">
                    {categoryData.map(({ id, title, image, price }) => (
                      <li className="product" key={id}>
                        <Link to={`/product/${id}`}>
                          <img className="image" src={image} alt={`${title}`} />
                        </Link>
                        <div>
                          <h3 className="title">
                            {title.length > 20 ? `${title.slice(0, 20)}...` : title}
                          </h3>
                          <p>Price: ${price}</p>
                          <button className='button' onClick={() => this.handleClickAddToCart({ id, title, price,image })}>
                            Add to Cart
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
