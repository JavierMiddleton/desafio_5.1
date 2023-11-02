import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">Happy Cake</span>
      </h1>
      <p>El lugar de los pasteles felices</p>
      <h1 style={{ fontSize: "5rem" }}>🎂</h1>
    </Container>
  );
};
export default HomePage;
