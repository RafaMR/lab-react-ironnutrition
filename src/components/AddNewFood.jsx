import React from 'react';
import { useState } from 'react';

function AddNewFood(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);

  const handleNameInput = (e) => setName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      name,
      image,
      calories,
    };

    props.addFood(newFood);
    setName('');
    setImage('');
    setCalories(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameInput}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <input
            className="input"
            type="file"
            placeholder="Image"
            value={image}
            onChange={handleImageInput}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Calories</label>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="Calories"
            value={calories}
            onChange={handleCaloriesInput}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button className="button is-link">Submit New Food</button>
        </div>
      </div>
    </form>
  );
}

export default AddNewFood;
