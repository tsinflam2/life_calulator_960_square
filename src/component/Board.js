import React from "react";
import ReactDOM from "react-dom/client";
import "../App.css";

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSquare(squareValue) {
    return (
      <Square
        value={squareValue}
        // onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    let ageLS = localStorage.getItem("newAge");
    let yellowSquare = ageLS * 12;
    let emptySquare = 960 - yellowSquare;
    console.log("Entered age: ", ageLS);
    console.log("Yellow Square: ", yellowSquare);

    //先建立一個空陣列
    let lists = [];

    //用迴圈將代辦事項的內容一個個放進空陣列中
    for (let i = 0; i <= yellowSquare - 1; i++) {
      //記得在JSX中使用JS變數要用花括號包著
      lists.push(this.renderSquare("\\"));
    }

    for (let i = 0; i <= emptySquare - 1; i++) {
      //記得在JSX中使用JS變數要用花括號包著
      lists.push(this.renderSquare(""));
    }

    return (
      <div>
        <div className="board-row">{lists}</div>
      </div>
    );
  }
}

function Square(props) {
  return <button className="square">{props.value}</button>;
}

export default Board;
