import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="signUpFormUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control
      </Form.Group>

      <Form.Group controlId="signUpFormPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
      </Form.Group>

      <Form.Group controlId="signUpFormEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control
      </Form.Group>

      <Form.Group controlId="signUpFormBirthday">
        <Form.Label>Birthday:</Form.Label>
        <Form.Control
      </Form.Group>
      
      <Button className="mt-3" variant="primary" type="submit">
        Submit
      </Button>
    </Form>