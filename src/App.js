import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import api from './api';



class App extends Component {
   
  constructor(props) {
    super(props);
    this.state = {
      name: 'Kevin',
      age: '15',
      address: 'dsfij',
      input: 'hola',
      show: true,
      selectedArticle: {},
      posts: []
    }
    
    this.changeName = this.changeName.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.selectArticle = this.selectArticle.bind(this);
    this.getPosts = this.getPosts.bind(this);

  }


  componentDidMount() {
    this.getPosts();
  }
  

  changeName() {
    const show = this.state.show;
    this.setState({
      name: 'Camilo',
      show: !show
    })
  }

  changeInput(e) {
    this.setState({
      input: e.target.value
    })
  }


  selectArticle(article) {
   this.setState({
    selectedArticle: article
   })
  }


  async getPosts() {
    const posts = await api.getPosts(); 
    this.setState({
      posts
    })
  }


  render() {
    return (
      <div className="App">
        <Header in={this.state.input}  name="Heyy!"> </Header>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/ >
          <h2>Welcome to Reactss  {this.state.input} </h2>
           <button onClick={this.changeName} > Dame click  </button>
        </div>

      { this.state.show &&  

        <p className="App-intro">
          <input value={this.state.input}  onChange={this.changeInput} />
        </p>  

        }

    { this.state.selectedArticle.title &&   <h2> tu articulo seleccionado fue {this.state.selectedArticle.title} </h2>   }
 
      
       <div> 
        { this.state.posts.map( (article, index) => (

            <div key={index} onClick={() =>  { this.selectArticle(article)  }  } >         
                  <h1> {article.title} </h1> 
                  <p>  
                    {article.body}
                  </p>
                           
             </div>  
          )
          )
        }
        </div>
    

      </div>
    );
  }
}

export default App;
