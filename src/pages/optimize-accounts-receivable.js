import { useEffect } from 'react';
import { navigate } from 'gatsby';

export default function OptimizeAccountsReceivablePage() {
  useEffect(() => {
    navigate('/accounts-receivable');
  });
  return null;
}
