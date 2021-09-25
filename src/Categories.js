import React from 'react';

function Categories(props) {
  return props.categories.map((category, index) => {
    return (
      <button
        key={index}
        className="tier-btn"
        onClick={() => {
          props.filterTier(index);
        }}
      >
        {category}
      </button>
    );
  });
}

export default Categories;
