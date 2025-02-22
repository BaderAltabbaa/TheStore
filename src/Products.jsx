import React,{ useState } from "react"
import Card from "./Card"
import './styles/product.css'



function Products(){

    const productsList =[
        {id:1 ,name:'Iphone 14 pro max' ,price: 1200 ,image:'3.jpg' ,category:'Phone'},
        {id:2 ,name:'Iphone 13 pro max' ,price: 1000 ,image:'2.jpg' ,category:'Phone'},
        {id:3 ,name:'Galaxy A50' ,price: 300 ,image:'1.png' ,category:'Phone'},
        {id:4 ,name:'HP Laptop' ,price: 1000 ,image:'4.jpg' ,category:'Laptop'},
        {id:5 ,name:'Asus Laptop' ,price: 750 ,image:'5.jpg' ,category:'Laptop'},
        {id:6 ,name:'Dell Laptop' ,price: 750 ,image:'6.jpg' ,category:'Laptop'},
        {id:7 ,name:'Asus Tablet' ,price: 150 ,image:'7.jpg' ,category:'Tablet'},
        {id:8 ,name:'Galaxy Tab 6' ,price: 250 ,image:'8.jpg' ,category:'Tablet'},
        {id:9 ,name:'Ipad 10' ,price: 700 ,image:'9.jpg' ,category:'Tablet'},
        {id:10 ,name:'AirPods Pro' ,price: 200 ,image:'12.jpg' ,category:'Accessory'}
      ]
    
    const categories = ['All','Phone','Laptop','Tablet','Accessory']
    

    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
      };

      const filteredProducts = selectedCategory === 'All'
      ? productsList
      :productsList.filter(product => product.category === selectedCategory);

    return( <div className="menu">
        <div className="filters">
            {categories.map((category) => (
                <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={selectedCategory === category ? 'active' : ''}
                >
                    {category}
                </button>
            ))}
        </div>
        <div className="grid-setup">
        <div className="products-grid">

            {filteredProducts.map((props) =>(
                <Card name={props.name} price={props.price} image={props.image}/>
            ))}

        </div>
        </div>
        </div>

    )
}

export default Products