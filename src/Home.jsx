import './styles/home.css'
import React,{useEffect,useState} from "react";
import ImageSlider from './ImageSlider'
import Card from './Card';


function Home(){

    const images = [
        "s1.jpg",
        "2.jpg",
        "s3.jpg"
       
      ];

      const productsList =[
        {id:1 ,name:'Iphone 14 pro max' ,price: 1200 ,image:'3.jpg'},
        {id:2 ,name:'HP Laptop' ,price: 1000 ,image:'4.jpg'},
        {id:3 ,name:'Galaxy A50' ,price: 300 ,image:'1.png'},
        {id:4 ,name:'Ipad 10' ,price: 700 ,image:'9.jpg'},
        {id:5 ,name:'Asus Laptop' ,price: 750 ,image:'5.jpg'},
        {id:6 ,name:'AirPods Pro' ,price: 200 ,image:'12.jpg'}
      ]

      const [time, setTime] = useState(new Date());
        
      useEffect(() => {
              const intervalId = setInterval(() => {
                      setTime(new Date());
              },1000);
      
              return () => {
                      clearInterval(intervalId);
              }
      },[]);
      
      function formatTime(){
          let hours = time.getHours().toString().padStart(1,0);
          const min = time.getMinutes().toString().padStart(2,0);
          const sec = time.getSeconds().toString().padStart(2,0);
          const ampm = hours >= 12 ? "PM" : "AM";
      
          hours = hours % 12 || 12;
      
          return `${hours}:${min}:${sec} ${ampm}` ;
      
      
      }

    return(<div className='body'>
        <div className="header"><span>Hello and Welcome to
        <span className='logo-home'> TheStore
            <span className="copyright">©</span>
            </span></span>
            <div className="clock">
        <span>{formatTime()}</span>
     </div>
        </div>
        <ImageSlider images={images} autoPlayInterval={3000} />
        <div className="demo-title">
            <span>Some Of Our Best Merch...</span>
            </div>
        <div className="demo"> 
        <div className="demo-sec">
            {productsList.map((props) => (
                <Card name={props.name} price={props.price} image={props.image}/>
            ))} 
        </div>
    </div>
    <div className="logo-about">
        <span>TheStore<span className="copyright">©</span>
        </span>
        </div>
    <div className="la3i">
        <span>-Is an online e-commerce shop where you can buy anything that comes to your mind regarding electronic.</span>
        <span>-explore what the store has to offer and fulfill your electronic needs.</span>
        <span>-you can buy anything electronic here starting from a cell-phone to a freaking washing machine.</span>
        <span>-be sure to checkout the website and our socialmedia accounts.</span>
        <span>-the store is created by Bader altabba using ReactJs from scratch.</span>
        
        </div>
    </div>    
        
    )
}

export default Home