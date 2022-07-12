import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Board from "./component/Board";

function App() {
  const [newAge, setNewAge] = useState(0);
  const [boardInstance, setBoardInstance] = useState();

  useEffect(() => {
    console.log("1", { newAge });
    // let a = localStorage.getItem("newAge");
  }, [newAge]);

  const clearLocalS = () => {
    localStorage.removeItem("newAge");
  };

  const setNewLocalS = () => {
    //塞資料進去
    console.log("Set New CLicked");
    console.log("Enter Age is " + newAge);

    localStorage.setItem("newAge", newAge);

    setBoardInstance(<Board />);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submission prevented");
  };

  return (
    <div className="App">
      <div className="d-flex justify-content-center">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Your Age Now:</Form.Label>
            <Form.Control
              type="number"
              min={0}
              max={100}
              placeholder="Enter your age"
              value={newAge}
              onChange={(e) => setNewAge(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your age with anyone else.
            </Form.Text>
          </Form.Group>
          <Button
            className="me-3"
            variant="primary"
            onClick={() => {
              setNewLocalS();
            }}
          >
            Set Your Age
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              clearLocalS();
            }}
          >
            Clear
          </Button>
        </Form>
      </div>
      <br />
      {boardInstance}
    </div>
  );
}

export default App;
