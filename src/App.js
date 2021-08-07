import { useState } from 'react';
import './App.css';
import Result from './components/Result';
import SearchMeal from './components/SearchMeal';
import Container from '@material-ui/core/Container';

function App() {
  const [food, setFood] = useState('');

  return (
    <Container>
      <SearchMeal setFood={setFood} />
      {food && <Result food={food} />}
    </Container>
  );
}

export default App;
