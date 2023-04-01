import { useContext } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { ThemeContext } from '../components/ThemeProvider';

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleSearch = (searchTerm) => {
    // Implement your search logic here.
    // It could be fetching results from an API or filtering a local data set.
    console.log('Searching for:', searchTerm);
  };
  
  return (
    <div className={`container ${theme}`}>
      <Header onThemeToggle={toggleTheme} />
      <SearchBar onSearch={handleSearch} />
      {/* Add your CSS here or use a CSS-in-JS solution */}
    </div>
  );
  
  };
  
  export default Home;
  