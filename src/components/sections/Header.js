import React from 'react';
import { Link } from 'gatsby';

import Image from '@common/Image';
import { Container, Button } from '@components/global';

const Header = props => (
  <header style={{ padding: '3rem 0', marginTop: '5rem' }}>
    <Container>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: 300 }}>
          <Image />
        </div>
        <div style={{ padding: '4rem' }}>
          <h1>Welcome to Insightful Buzz</h1>
          <p>
            Backlinks are just the begining <br /> Now go build something
            great.
          </p>
          <Button as={Link} to="/page-2/" style={{ textDecoration: 'none' }}>
            Go to page 2 &nbsp; &rarr;
          </Button>
        </div>
      </div>
    </Container>
  </header>
);

export default Header;
