import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Card,
  CardBody,
  CardTitle
} from "reactstrap";
import {useState} from 'react';

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export default function Login(){
    const [formData, setFormData] = useState({
    username: "",
    password: "",
    terms: false
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Gönderilen veri:", formData);

    // basit kontrol
    if (!formData.username || !formData.password) {
      alert("Tüm alanları doldurun");
      return;
    }

    alert("Giriş başarılı (örnek)");
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
              <Label for="username">Kullanıcı Adı</Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Kullanıcı adınızı girin"
                value={formData.username}
                onChange={handleChange}
              />
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
              />
            </FormGroup>

            <FormGroup>
              <Input
                id="terms"
                name="terms"
                type="checkbox"
                value={formData.terms}
                onChange={handleChange}
              />
              <Label for="terms">I agree.</Label>
            </FormGroup>

            <Button color="primary" block>
              Giriş Yap
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}