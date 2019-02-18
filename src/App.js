import React, { Component } from "react";
import StudentCard from "./components/StudentCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import students from "./students.json";


// function shuffleArray(array) {
//   for (var i = array.length - 1; i > 0; i--) {
//       var j = Math.floor(Math.random() * (i + 1));
//       var temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//   }
// }

class App extends Component {
  state = {
    students,
    score: 0,
    bestscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.bestscore) {
      this.setState({bestscore: this.state.score}, function() {
        console.log("New Personal Best! Your New Record: " + this.state.bestscore)
      });
    }
    this.state.students.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over! \nScore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.students.find((o, i) => {
      if (o.id === id) {
        if (students[i].count === 0) {
          students[i].count = students[i].count + 1;
          this.setState({score: this.state.score + 1}, function(){
            console.log("Correct. Score is now " + this.state.score);
          });
          // const shuffledArray = shuffleArray(this.state.students);
          this.state.students.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  }

  render() {
    return (
      <Wrapper>
        <Header
        score={this.state.score}
        bestscore={this.state.bestscore}>
        </Header>
        {this.state.students.map(student => (
          <StudentCard
            clickCount={this.clickCount}
            id={student.id}
            key={student.id}
            image={student.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
