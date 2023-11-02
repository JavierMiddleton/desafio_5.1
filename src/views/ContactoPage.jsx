import { Container } from "react-bootstrap";
import Contacto from "../components/Contacto";

const ContactoPage = () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4">Cuéntanos, ¿en qué te podemos ayudar?</h1>
      <Contacto />
    </Container>
  );
};
export default ContactoPage;
