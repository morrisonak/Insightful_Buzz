import React from 'react';

import Layout from '@common/Layout';
import Header from '@sections/Header';
import About from '@sections/About';
import Gallery from '@sections/Gallery';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Header />
    <About />
    <Gallery />
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;
