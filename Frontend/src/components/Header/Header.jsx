import { Container, Row } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';


const Nav__links=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/blog',
    display:'Blog'
  },
  {
    path: '/contact',
    display:'Contact'
  },
]

const Header = () => {
  return (
    <header className="bg-custom-darkvoid py-4">
      <Container>
        {/* Top row */}
        <Row>
          {/* Left side: Contact Info */}

          {/* Right side: Social Media Icons */}
          
        </Row>

        {/* Bottom Row */}
        <Row>
          <div>
            {/* logo */}
          <div className="logo">
            <button className='font-sans inter-700'>Souvik.</button>
          </div>
          {/* logo end */}

          {/* menu start */}
          <div className="navigation ">
            <ul className="">
              {Nav__links.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink to={item.path}>{item.display}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* menu end */}
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
