import Navbar from "components/share/Navbar";
import { Container } from "react-bootstrap";
import { Routes } from "routes";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes />
      </Container>
    </>
  );
}

export default App;
