import React, { Component } from "react";
import "./App.css";
import Customer from "./components/Customer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {withStyles}from "@material-ui/core/styles";

const styles= theme=>({
  root: {
    width:'100%',
    marginTop : theme.spacing.unit * 3,
    overflowX : "auto"
    
  },
  table:{
    minWidth:1080
  }
})
const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/any1",
    name: "하두부",
    birthday: "901204",
    gender: "여",
    job: "판사",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/any2",
    name: "엄수박",
    birthday: "910317",
    gender: "남",
    job: "변호사",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/any3",
    name: "하푸린",
    birthday: "920615",
    gender: "남",
    job: "의사",
  },
];
=======
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
>>>>>>> d315829dc1fe967e810470ab7f1c7e7c0856a053
class App extends Component {
  render() {

    const{classes} = this.props;
    
    return (
<<<<<<< HEAD
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>나이</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {customers.map((c) => {return (<Customer key={c.id} id={c.id} image={c.image} name={c.name}birthday={c.birthday} gender={c.gender} job={c.job}/>);})}
          </TableBody>
        </Table>
      </Paper>
=======
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
>>>>>>> d315829dc1fe967e810470ab7f1c7e7c0856a053
    );
  }
}
export default withStyles(styles)(App);
/**   */