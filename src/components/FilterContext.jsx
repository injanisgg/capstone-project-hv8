import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => setIsFilterOpen(prev => !prev);

  return (
    <FilterContext.Provider value={{ isFilterOpen, toggleFilter, setIsFilterOpen }}>
      {children}
    </FilterContext.Provider>
  );
};