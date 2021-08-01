import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
class Customer extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.id}</TableCell>
        <TableCell>
          <img src={this.props.image} alt="profile" />
        </TableCell>
        <TableCell>{this.props.name}</TableCell>
        <TableCell>{this.props.birthday}</TableCell>
        <TableCell>{this.props.gender}</TableCell>
        <TableCell>{this.props.job}</TableCell>
      </TableRow>
    );

  import React from "react";

  class Customer extends React.Component {
    render() {
      return (
        <div>
          <CustomerProfile image={this.props.image} id={this.props.id} name={this.props.name} />
          <CutomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
        </div>
      );
    }
  }
  
  class CustomerProfile extends React.Component{
    render(){
      return(
        <div>
          <img src = {this.props.image} alt="profile"/>
          <h2>{this.props.name}({this.props.id})</h2>
        </div>
      )
    }
  }

  class CutomerInfo extends React.Component{
    render(){
      return(
        <div>
          <p>{this.props.birthday}</p>
          <p>{this.props.gender}</p>
          <p>{this.props.job}</p>
        </div>
      )
    }
>>>>>>> d315829dc1fe967e810470ab7f1c7e7c0856a053
  }

  export default Customer;
