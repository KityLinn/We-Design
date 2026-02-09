import { Container, Row, Col, Button } from "react-bootstrap";

export default function Hero() {
  return (
    <section className="hero-banner" id="hero">
      <Container fluid className="h-100 align-items-center">
        <Row className="h-100 align-items-center">
          <Col xs={10} md={8} xl={6} className="text-box p-5">
            <h1 className="display-3 fw-bold text-white mb-5">
              We Design 3d product experiences that transcend reality
            </h1>
            <Button className="btn btn-custom px-4 py-2 fw-semibold">
              Work with us
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
