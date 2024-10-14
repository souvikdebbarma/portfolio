
import { Container, Row, } from 'reactstrap'

const Header = () => {
  return (
    <header>
      <Container className="bg-gray-900 text-white p-4">
        {/* Top Row */}
        <Row>
          <div>
            {/* Left side: Phone number and email */}
        <div>
          <p>📞 +123 456 7890 | ✉️ email@example.com</p>
        </div>
          </div>
        </Row>

        {/* Bottom Row */}
        <Row>
          Hellow
        </Row>
      </Container>
    </header>
  )
}

export default Header;