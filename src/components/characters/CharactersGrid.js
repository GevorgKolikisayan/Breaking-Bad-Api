import React from 'react'
import CharactersItem from './CharactersItem';
import Header from './CharactersItem';

const CharactersGrid = ({items, isLoading}) => {
  return isLoading ? <h1>Loading...</h1> : <section className='cards'>
    {items.map(item => (
      <CharactersItem key={item.char_id} item={item} />
    ))}
  </section>
}

export default CharactersGrid