import React from 'react';
import { Link } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Container from '../components/Container';

const NotFoundPage = () => (
  <Layout>
    <GatsbySeo title="404: This page could not be found" />
    <Container>
      <div className="container-404">
        <h1>Sorry, but the page you were looking doesn't exist</h1>
        <p>
          You can <Link to="/">return to our homepage</Link> that does exist.
        </p>
      </div>
    </Container>
    <Footer />
    <style jsx>{`
      .container-404 {
        padding-top: 100px;
        padding-bottom: 100px;
      }
    `}</style>
  </Layout>
);

export default NotFoundPage;
