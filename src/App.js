import './App.css';
import Card from './Card';
import data from './data';
import { useState } from 'react';
import Categories from './Categories';

function App() {
  const [cards, setCards] = useState(data);
  const allCategories = [
    'hero',
    'Tier 1',
    'Tier 2',
    'Tier 3',
    'Tier 4',
    'Tier 5',
    'Tier 6',
  ];
  // eslint-disable-next-line
  const [categories, setCategories] = useState(allCategories);

  const filterTier = (index) => {
    if (index === 0) {
      const filterData = data.filter((card) => {
        return card.cardTypeId === 3;
      });
      setCards(filterData);
    } else {
      const filterData = data.filter((card) => {
        return card.battlegrounds.tier === index;
      });
      setCards(filterData);
    }
  };

  return (
    <div className="App">
      <header>
        <div className="title">BG Helper</div>
        <div className="tier-btn-container">
          <Categories categories={categories} filterTier={filterTier} />
        </div>
      </header>
      <section className="cards-display">
        {cards.map((card) => {
          return <Card key={card.id} {...card} />;
        })}
      </section>
    </div>
  );
}

export default App;
