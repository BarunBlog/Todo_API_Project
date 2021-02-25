import React from 'react';
import axios from 'axios';


/*class App extends Component {
  state = {
    todos: []
  };

  componentDidMount(){
    this.getTodos();
  }

  getTodos(){
    axios
    .get('http://127.0.0.1:8000/api/')
    .then(res => {
      this.setState({todos: res.data});
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        {this.state.todos.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.body}</span>
          </div>
        ))}
      </div>
    );
  }
}*/


const App = () => {
  const [todos, setTodos] = React.useState({hits: []});

  React.useEffect(() => {
    const fetchData = async () => {
      axios
      .get('http://127.0.0.1:8000/api/')
      .then(res => {
          setTodos({ hits: res.data });
        });
    }
    fetchData();
    
  }, [])

  return (
    <List todos={todos}/>
  )
};

const List = props => (
  <div>
    {props.todos.hits.map(item => (
      <div key={item.id}>
        <h1>{item.title}</h1>
        <span>{item.body}</span>
      </div>
    ))}
  </div>
);


export default App;