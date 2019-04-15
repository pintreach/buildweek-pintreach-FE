import React from 'react';

class PintreachForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        pin: {
            something: '',
            somethings: ''
        }
      };
    }

    handleChanges = e => {
        this.setState({ pin: e.target.value });
       
    };


 addPintreach = e => {
     e.preventDefault();
     this.props.addPintreach(this.state.pin)
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
        
    );
}
}
export default PintreachForm;