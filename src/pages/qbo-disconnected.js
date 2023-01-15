import React from 'react';

import Layout from '../components/Layout';
import Container from '../components/Container';
import BlockHeaderNoImage from '../components/BlockHeaderNoImage';
import Footer from '../components/Footer';

export default function qboDisconnectedPage({ data }) {
  return (
    <Layout>
      <Container>
        <BlockHeaderNoImage
          title="QuickBooks Disconnected"
          desc={
            <span>
              Your QuickBooks Online integration has been disconnected. You will
              no longer to be able to sync records between your QuickBooks
              account and Resolve.
            </span>
          }
          primaryButtonText="Reconnect Resolve and QuickBooks"
          primaryButtonTo="https://help.resolvepay.com/en/articles/3808325-resolve-quickbooks-online-sync"
        />
      </Container>
      <Footer />
    </Layout>
  );
}
