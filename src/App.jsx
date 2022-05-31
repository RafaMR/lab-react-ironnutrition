import React from 'react';
import { useState } from 'react';
import 'bulma/css/bulma.css';
import foodsData from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFood] = useState(foodsData);
  const [showForm, setForm] = useState(true);
  const [todaysFoods, setTodaysFoods] = useState([]);

  const addNewFood = (newfood) => {
    const updatedFood = [...foods, newfood];
    setFood(updatedFood);
    toggleForm();
  };

  const toggleForm = () => {
    setForm(!showForm);
  };

  const handleSearchSubmit = (searchTerm) => {
    const results = foods.filter((food) => {
      return food.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFood(results);
  };

  const handleAddFood = (food) => {
    const updatedFood = [...todaysFoods, food];
    setTodaysFoods(updatedFood);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">IronNutrition</h1>

        <button onClick={toggleForm} className="button is-primary">
          {showForm ? 'Hide Form' : 'Show Form'}
        </button>
        {showForm && (
          <AddFoodForm addFood={addNewFood} className="test-container" />
        )}
        <br />
        <Search onSubmit={handleSearchSubmit} />
        <br />

        <div className="columns">
          <div className="column">
            {foods.map((food, index) => {
              return (
                <div className="box" key={index}>
                  <FoodBox
                    name={food.name}
                    calories={food.calories}
                    image={food.image}
                    onClick={handleAddFood}
                  />
                </div>
              );
            })}
          </div>

          <div className="column">
            <h2 className="subtitle"> Today´s Food </h2>
            <ul>
              {todaysFoods.map((food, index) => {
                return (
                  <li key={index}>
                    {food.name} - {food.calories} calories - {food.image}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
