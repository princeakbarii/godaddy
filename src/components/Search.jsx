import React from 'react'


export default function Search() {
  return (
    <div className='main-search'>
      <div className="clipboard">
        <input type="text" className="domain-input" placeholder="Type the domain you want" />
        <button className="search-btn">Search Domains</button>
        <div className="price-info">
            <span className="price">₹ 125.21*/1st yr.</span><br/>
            <span className="subtext">Satisfy the world's buyers with .shop</span>
        </div>
    </div>
    </div>
  )
}
