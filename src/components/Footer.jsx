import { Container } from "react-bootstrap"
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-4 px-4 px-md-5" style={{ backgroundColor: '#0f0f0f' }}>
      <Container className="d-flex justify-content-between align-items-center">
        <p className="mb-0">© 2026 Linn Kristine. All rights reserved.</p>
        <div className="d-flex gap-4">
          <a
            href="#"
          >
            <Facebook size={20} />
          </a>
          <a
            href="#"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#"
          >
            <Twitter size={20} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
