import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import Profile from "./components/Profile/Profile";
import resume from "./utils/resume";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import Resume from "./pages/resume/Resume";
import Header from "./components/Header/Header";

function App() {
  return (
    <Container className="top_60">
      <Row className="row">
        <Col className="col-lg-3 col-md-4">
          <Profile {...resume} />
        </Col>
        <div className="col-lg-9 col-md-8 tab-container">
          <Header/>
          <div className="content">
            <Resume {...resume} />
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default App;
