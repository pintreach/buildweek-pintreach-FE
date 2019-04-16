import React from 'react';
import axios from "axios";

class PintreachForm extends React.Component {
    constructor() {
      super();
      this.state = {
        pintreach: {
            img: '',
            title: '',
            website: '',
            id: ''

            
        }
      };
    }
    componentDidMount() {
      axios
        .get("")
  
        .then(res => {
          this.setState({ pintreach: res.data.pintreach });
        })
        .catch(err => {
          throw new Error(err);
        });
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
    .then(res => {
      this.setState({
        deletePintreach: res.data.pintreach
      })
    })
    .catch(err => {
      throw new Error(err);
    });
    }
    handleChanges = e => {
        this.setState({ pintreach: e.target.value });
       
    };


 addPintreach = e => {
     e.preventDefault();
     this.addPintreach(this.state.pintreach)
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
          value={this.state.pintreach}
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