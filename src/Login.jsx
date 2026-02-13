import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Card,
  CardBody,
  CardTitle,
  FormFeedback
} from "reactstrap";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    terms: false
  });

  const [errors, setErrors] = useState({
    email: null,
    password: null, 
    terms: null
  });

  const [valid, setValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (errors.email === false && errors.password === false && errors.terms === false)
    {
      setValid(true);
    }
    else {
      setValid(false);
    }
  }, [errors])

  function handleChange(e) {
    const { name, value, checked } = e.target;

    if (name == 'terms') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    }
    else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    if (name == 'email'){
      if (!validateEmail(value))
        setErrors({...errors, email: true})
      else 
        setErrors({...errors, email: false})
    }
    else if (name == 'password'){
      if (value.length < 5)
        setErrors({...errors, password: true})
      else
        setErrors({...errors, password: false})
    }
    else if (name == 'terms'){
      if (checked == false)
        setErrors({...errors, terms: true})
      else
        setErrors({...errors, terms: false})
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!valid)
      return;

    navigate('succes');

  }

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card style={{ width: "400px" }}>
        <CardBody>
          <CardTitle tag="h4" className="text-center mb-4">
            Giriş Yap
          </CardTitle>

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="text"
                placeholder="Email giriniz"
                value={formData.email}
                onChange={handleChange}
                invalid={errors.email} 
              />
              <FormFeedback>
                Doğru bir email girin.
              </FormFeedback>
            </FormGroup>

            <FormGroup>
              <Label for="password">Şifre</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Şifrenizi girin"
                value={formData.password}
                onChange={handleChange}
                invalid={errors.password}
              />
              <FormFeedback>
                Password 5 karakterden büyük olmalı
              </FormFeedback>
            </FormGroup>

            <FormGroup>
              <Input
                id="terms"
                name="terms"
                type="checkbox"
                value={formData.terms}
                onChange={handleChange}
                invalid={errors.terms}
              />
              <Label for="terms">I agree.</Label>
              <FormFeedback>
                Şartlar kabul edilmeli.
              </FormFeedback>
            </FormGroup>

            <Button id="submit" disabled={!valid} color="primary" block>
              Giriş Yap
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}