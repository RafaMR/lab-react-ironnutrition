import React from 'react';
import { useState } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddNewFood from './components/AddNewFood';

function App() {
  const [foodsArr, setFoods] = useState(foods);

  const createFood = (foodDetails) => {
    setFoods([foodDetails, ...foodsArr]);
  };

  return (
    <div className="App">
      <AddNewFood createNewFood={createFood} />
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
