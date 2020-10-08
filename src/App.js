import React from "react";
import Category from "./Category";
import Navi from "./Navi";
import EkleButton from "./EkleButton";
import { Container, Row } from "reactstrap";
function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <EkleButton/>
        </Row>
        <Row>
          <Category />
        </Row>
      </Container>
    </div>
  );
}

export default App;
