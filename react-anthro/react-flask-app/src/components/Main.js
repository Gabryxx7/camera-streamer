import Collaborator from './Collaborator'
class Main extends React.Component {
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
  
  // Example usage: <ShoppingList name="Mark" />