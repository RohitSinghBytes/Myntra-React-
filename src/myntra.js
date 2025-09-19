import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Card from "./Component/card";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
// import Header as head from "./Component/Header";
// jis fxn ko import kia apne hisab se bhi naam de sakta hun
import arr from "./Utilis/dummy";

// Aise likhna padega jab 2 ya jyada fxn ho
// import {greet as goa , meet as roa} from "./Utilis/dummy";


function App(){

const [products, setProducts] = useState(arr);
// filter function (ascending order)
const handleFilter = () => {
  const sortedProducts = [...products].sort((a, b) => a.Price - b.Price);
  setProducts(sortedProducts);
};

     return (<>
      {/* Pass filter function to Header */}
       <Header onFilter={handleFilter} />
     {/* // body */}
     <div className="middle" style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
        {/* <Card cloth="T-Shirt" offer="20-60%off"/>
        <Card cloth="Jeans" offer="30-50%off"/>
        <Card cloth="Pant" offer="20-80%off"/>
        <Card cloth="Kurta" offer="40-60%off"/>
        <Card cloth="T-shirt" offer="30-60%off"/>
        <Card cloth="Jeans" offer="50-60%off"/> */}
        {
            products.map((value,index)=><Card key={index} cloth={value.cloth} offer={value.Offer}  price={`$ ${value.Price}`} image={value.image} />)
            // ye expression array return karke dega, aur uss array mein data hai usse JSX janta hai
            // yaha for loop  nahi laga sakte hai error dega because o/p nahi deta
        }
     </div>
       <Footer/>
     </>
     )
}

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);