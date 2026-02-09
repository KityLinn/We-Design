import { Container, Row, Col, Button } from "react-bootstrap";

export default function About() {
  return (
    <section
      id="about"
      className="py-5 px-4 px-md-5"
    >
      <Container>
        <Row className="align-items-center mb-5">
          <Col md={6} >
            <h1 className="display-5 fw-bold mb-4">
              We create objects that blur the line between real & virtual
            </h1>
            <p className="fs-5 lh-lg mb-4">
              At Calypso Studio, we specialize in designing 3D product experiences that transcend reality. Our team of skilled designers and developers is dedicated to pushing the boundaries of what's possible, creating immersive and interactive 3D experiences that captivate and engage users. Whether it's for virtual showrooms, product demos, or augmented reality applications, our innovative solutions bring products to life in ways that traditional media cannot.
            </p>
          </Col>
          <div className="col-md-6">
            <div
              className="bg-secondary rounded overflow-hidden"
              style={{
                height: '400px',
                backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:rgb(120,120,120);stop-opacity:0.3" /><stop offset="100%" style="stop-color:rgb(60,60,60);stop-opacity:0.5" /></linearGradient></defs><rect x="50" y="50" width="100" height="100" fill="url(%23grad2)" /><rect x="200" y="100" width="120" height="120" fill="url(%23grad2)" /><circle cx="100" cy="250" r="80" fill="url(%23grad2)" /><rect x="250" y="250" width="80" height="80" fill="url(%23grad2)" /></svg>')`,
                backgroundSize: 'cover',
                backgroundColor: '#374151',
              }}
            />
          </div>
        </Row>

        <Row className="row mt-5">
          <h2 className="display-6 fw-bold mb-4">Who we are</h2>
          <Col md={6}>
            <p className="lh-lg fs-5 ">
              We are a team of creative visionaries and technical experts united by a passion for pushing the boundaries of digital design. With years of experience in 3D modeling, interactive design, and immersive technology, we've helped leading brands transform how they present their products to the world.
            </p>
          </Col>
          <Col md={6} className="lh-lg fs-5 ">
            <p className="mb-3">
              Our approach combines cutting-edge technology with artistic excellence. We believe that every product has a story, and we're here to tell it in the most compelling way possible.
            </p>
            <p>
              From concept to execution, we work closely with our clients to ensure that every detail reflects their vision and exceeds their expectations.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
