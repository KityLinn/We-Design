import { Container, Row, Col, Button } from "react-bootstrap";

export default function Contact() {


  return (
    <section
      id="contact"
      className="py-5 px-4 px-md-5"

    >
      <Container>
        <Row className="align-items-center g-5">
          <Col md={6}>
            <h2 className="display-5 fw-bold text-white mb-4">Contact us!</h2>
            <p className="text-gray-400 fs-5">
              We would love to hear from you!
            </p>
          </Col>
          <Col md={6}>
            <form>
              <div className="row mb-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="form-control"
                    style={{
                      backgroundColor: '#1f2937',
                      borderColor: '#374151',
                      color: '#fff',
                    }}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="form-control"
                    style={{
                      backgroundColor: '#1f2937',
                      borderColor: '#374151',
                      color: '#fff',
                    }}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  style={{
                    backgroundColor: '#1f2937',
                    borderColor: '#374151',
                    color: '#fff',
                  }}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  className="form-control"
                  style={{
                    backgroundColor: '#1f2937',
                    borderColor: '#374151',
                    color: '#fff',
                  }}
                  required
                />
              </div>
              <Button
                type="submit"
                className="btn btn-custom w-100 fw-semibold"
              >
                Send Message
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
