import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormData = ({handleSubmit}) => {
    return ( 
        <form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre y Apellido</Form.Label>
                <Form.Control type="text" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email_check">
                <Form.Label>Repita Email</Form.Label>
                <Form.Control type="email" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="number" required/>
            </Form.Group>
            <Button className="btn btn-dark offset-5" type="submit">
                Enviar
            </Button>
        </form>
    );
}
 
export default FormData;