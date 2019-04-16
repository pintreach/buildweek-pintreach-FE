import React from 'react';
import axios from "axios";

class PintreachForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        pin: {
            img: 'img'
            
        }
      };
    }
    addPintreach = item => {
      axios
        .post("", item)
        .then(res => {
          this.setState({
            addPintreachSuccess: res.data.pintreach
          });
        })
        .catch(err => {
          throw new Error(err);
        });
    };

    deletePintreach = item => {
    axios
    .delete(` ${id}`)
    .then(res)
    .catch(err => {
      throw new Error(err);
    });
    }
    handleChanges = e => {
        this.setState({ pin: e.target.value });
       
    };


 addPintreach = e => {
     e.preventDefault();
     this.addPintreach(this.state.pin)
 }

 deletePintreach = e => {
   e.preventDefault();
   this.deletePintreach('')
 }
    
    render() {
      return (
        
      <form onSubmit={this.addPintreach}>
        <input
        type="text"
        value={this.state.pin}
        pin="pin"
        onChange={this.handleChanges}
        placeholder="Pintreach"
        />
        <button type="">Add new page</button>
       
        </form> 
          <form onSubmit={this.deletePintreach}>
          <input
          type="text"
          value={this.state.pin}
          pin="pin"
          onChange={this.handleChanges}
          placeholder="Delete"
          />
          <button type="">Delete page</button>
         
          </form> 
        
    );
}
}
export default PintreachForm;