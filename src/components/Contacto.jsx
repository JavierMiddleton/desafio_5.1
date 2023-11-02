import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Contacto() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descripción:</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      <Button variant="danger" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default Contacto;
