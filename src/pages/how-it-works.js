import { useEffect } from 'react';
import { navigate } from 'gatsby';

export default function HowItWorksPage() {
  useEffect(() => {
    navigate('/net-terms');
  });
  return null;
}
