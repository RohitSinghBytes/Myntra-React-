function Header({ onFilter }){
  return (
    <div className="heading">

    <img className="images" src="https://aartisto.com/wp-content/uploads/2020/11/myntra-930x620.png" height="80px" width="80px"/>
    <div className="option">
        <button className="but">Men</button>
        <button className="but">Women</button>
        <button className="but">Kids</button>
        <button className="but">Home and Living</button>
        <button className="but">Beauty</button>
        <button className="but">Studio</button>
    </div>
    <input className="searchbar" placeholder="Search for Product brands and more"></input>

    <div className="Profile">
<button className="filter" onClick={onFilter}>
  Filter
</button>
        {/* <button className="pro">Profiles</button>
        <button className="pro">Wishlist</button>
        <button className="pro">Bag</button> */}
    </div>
 
    </div>
  )
}

export default Header;