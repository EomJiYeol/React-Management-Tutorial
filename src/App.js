import React, { Component } from "react";
import "./App.css";
import Customer from "./components/Customer";
const customers = [{
  'id' :1,
  'image' :'https://placeimg.com/64/64/any1',
  'name': "하두부",
  'birthday': "901204",
  'gender': "여",
  'job': "판사",
},
{
  'id' :2,
  'image' :'https://placeimg.com/64/64/any2',
  'name': "엄수박",
  'birthday': "910317",
  'gender': "남",
  'job': "변호사",
},
{
  'id' :3,
  'image' :'https://placeimg.com/64/64/any3',
  'name': "하푸린",
  'birthday': "920615",
  'gender': "남",
  'job': "의사",
  
}];
class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c=>{
            return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
  </div>
    );
  }
}
export default App;
