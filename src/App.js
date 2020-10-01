import React from "react";
import Category from "./Category";
import Navi from "./Navi";

import { Container, Row } from "reactstrap";
function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Category />
        </Row>
      </Container>
    </div>
  );
}

export default App;
