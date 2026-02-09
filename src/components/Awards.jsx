import { Container, Row, Col, Button } from "react-bootstrap";

const awards = [
  {
    title: 'Digital Innovation Award',
    description: 'Recognized for groundbreaking contributions to 3D design and immersive experiences',
    year: 2024,
  },
  {
    title: 'Best in Interactive Design',
    description: 'Honored for creating the most engaging and interactive digital products of the year',
    year: 2023,
  },
  {
    title: 'Creative Excellence Award',
    description: 'Celebrated for pushing creative boundaries and setting new standards in the industry',
    year: 2023,
  },
  {
    title: 'Future Design Pioneer',
    description: 'Acknowledged as leaders in pioneering the future of product visualization and design',
    year: 2022,
  },
];

export default function Awards() {


  return (
    <section
      id="awards"
      className="py-5 px-4 px-md-5"
      style={{backgroundColor: '#1f2937'}}

    >
      <Container >
        <h2 className="display-5 fw-bold mb-5 text-center">Our Awards</h2>
        <Row className="g-4">
          {awards.map((award, index) => (
            <div key={index} className="col-md-6">
              <div
                className="p-4 rounded"
                style={{
                  backgroundColor: '#111827',
                }}

              >
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h3 className="fs-4 fw-bold fw-medium">{award.title}</h3>
                  <span className="fw-bold fs-5" style={{ color: '#b45309' }}>{award.year}</span>
                </div>
                <p className="mb-0">{award.description}</p>
              </div>
            </div>
          ))}
        </Row>
      </Container>
    </section>
  );
}
