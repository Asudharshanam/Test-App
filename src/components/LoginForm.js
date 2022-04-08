import { useState } from "react";
import { useHistory } from "react-router";
import { Form, FormGroup, Label, Button, Input, Spinner } from "reactstrap";
import { userService } from "../api/userService";

export default function LoginForm() {
  const { push } = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    submitting: false,
    error: false,
  });

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    setFormData({ ...formData, submitting: true });
    userService.login(username, password).then(
      (user) => push({ pathname: "/security-positions" }),
      (error) => setFormData({ ...formData, error, submitting: false })
    );
  };

  return (
    <div className="login-form">
      <Form inline>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
          <Label className="me-sm-2" for="exampleEmail">
            Username
          </Label>
          <Input
            id="exampleEmail"
            name="username"
            type="text"
            value={formData.username}
            onChange={onChange}
            disabled={formData.submitting}
          />
        </FormGroup>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
          <Label className="me-sm-2" for="examplePassword">
            Password
          </Label>
          <Input
            id="examplePassword"
            name="password"
            type="password"
            value={formData.password}
            onChange={onChange}
            disabled={formData.submitting}
          />
        </FormGroup>
        <Button
          disabled={
            !formData.username || !formData.password || formData.submitting
          }
          style={{ marginTop: "20px", width: "100%" }}
          onClick={onSubmit}
        >
          Submit {formData.submitting && <Spinner size="sm" />}
        </Button>
      </Form>
    </div>
  );
}
