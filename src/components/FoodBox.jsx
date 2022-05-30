import React from 'react';
import { useState } from 'react';

const FoodBox = ({ name, calories, image, onClick }) => {
  const [item, setItem] = useState([]);

  const handleTotalItems = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name,
      calories,
      image,
      item,
    };

    onClick(newItem);
    setItem('');
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt={name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name} </strong> <br />
              <small>{calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <form className="control" onSubmit={handleSubmit}>
              <input
                className="input"
                type="number"
                value={item}
                onChange={handleTotalItems}
              />
              <button className="button is-info">+</button>
            </form>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FoodBox;
