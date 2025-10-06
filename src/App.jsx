import React from 'react'

import './App.css'

function App() {
  

  return (
      <>
      <section className ="header">
        <h1>SAGAR-NIVAS</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Menu</a>
          <a href="#">Contact</a>
        </nav>
      </section>
      <section className="about">
        <h3>
          Welcome to Sagar Nivas, your go-to destination for authentic Indian cuisine. Our restaurant offers a diverse menu featuring traditional dishes made with fresh ingredients and bold flavors. Whether you're craving spicy curries, flavorful biryanis, or delicious vegetarian options, we have something for everyone. Join us for a memorable dining experience that celebrates the rich culinary heritage of India.  
        </h3>
      </section>
      <section className="menu">
        <h1>Menu</h1>
        <div className="menu-item">
          <h2>Butter Chicken</h2>
          <p>Price: $12.99</p>
          <p>Description: Tender chicken cooked in a creamy tomato sauce with aromatic spices.</p>
        </div>
        <div className="menu-item">
          <h2>Palak Paneer</h2>
          <p>Price: $10.99</p>
          <p>Description: Fresh spinach and cottage cheese cooked in a flavorful blend of spices.</p>
        </div>
        <div className="menu-item">
          <h2>Vegetable Biryani</h2>
          <p>Price: $11.99</p>
          <p>Description: Fragrant basmati rice cooked with mixed vegetables and aromatic spices.</p>
        </div>
      </section>
      <section className="contact">
        <h1>Contact Us</h1>
        <p>Address: 123 Main St, City, Country</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: example.com</p>
      </section>
      <footer>
        <p>&copy; 2024 Sagar Nivas. All rights reserved.</p>
      </footer>

    </>
  )
}

export default App
