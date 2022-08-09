import Alert from 'react-bootstrap/Alert';

const OrderSuccess = ({idOrder}) => {
    return (
        <Alert variant="success" className="text-center">
            <Alert.Heading>¡Muchas gracias por tu compra!</Alert.Heading>
            <hr />
            <p className="mb-0">
                Su órden fue registrada con el id <span style={{fontWeight: "bold"}}>{idOrder}</span>.
            </p>
      </Alert>
    );
}
 
export default OrderSuccess;