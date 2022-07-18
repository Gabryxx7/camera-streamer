import React from 'react';

export class Collaborator extends React.Component {
    render() {
      return (
        <div className="collaborator">
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
  }
  export default Collaborator;
  // Example usage: <ShoppingList name="Mark" />