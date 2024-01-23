import './App.css';
import Portfolio from './components/Portfolio';
import { data } from './components/data';

function App() {
  const filters = ["All", "Websites", "Flayers", "Business Cards"];
  
  return (
    <Portfolio
      projects = {data}
		filters = {filters}
    />
  );
}

export default App;