import React from 'react';
import { useState } from 'react';
import 'bulma/css/bulma.css';
import foodsData from './foods.json';
import FoodBox from './components/FoodBox';
import AddNewFood from './components/AddNewFood';

function App() {
  const [foods, setFood] = useState(foodsData);
  const [showForm, setForm] = useState(true);

  const addNewFood = (newfood) => {
    const updatedFood = [...foods, newfood];
    setFood(updatedFood);
  };

  const toggleForm = () => {
    setForm(!showForm);
  };

  return (
    <div className="App">
      <button onClick={toggleForm} className="button is-primary">
        Add New Foods Form
      </button>
      {showForm && <AddNewFood addFood={addNewFood} />}
      {foods.map((food) => {
        return (
          <FoodBox
            name={food.name}
            calories={food.calories}
            image={food.image}
          />
        );
      })}
    </div>
  );
}

export default App;
