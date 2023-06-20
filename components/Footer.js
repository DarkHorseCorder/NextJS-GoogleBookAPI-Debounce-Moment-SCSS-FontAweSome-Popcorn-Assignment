import { Container, Row, Col, Image } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="Footer">
      <Container>
        <Row>
          <Col>
            <div className="Footer-Credit">
              <p className="small text-light mb-2">
                Developed by Andrii Tertychnyi @2023 . <a href="https://www.linkedin.com/in/andriiter/" className="text-info">LinkedIn</a>
              </p>
              <Image fluid src="./static/google-logo.png" alt="Powered by Google" />
              <p className="small text-white-50 mb-0">Powered by Google</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;