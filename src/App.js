import React from "react";
import "./styles.css";

class App extends React.Component {
  state = {
    Person: {
      fullName: "Mossaad Meftah",
      bio: "From Tunisia working in a company",
      imgSrc: "/my photo.jpg",
      profession: "Employee"
    },
    show: true
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    return (
      <>
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img
              src={this.state.Person.imgSrc}
              alt="me"
              style={{ width: 200, height: 180, border: 'solid red 2px' }}
            />
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </>
        )}

        <button onClick={this.handleShowPerson}>click here</button>
      </>
    );
  }
}

export default App;