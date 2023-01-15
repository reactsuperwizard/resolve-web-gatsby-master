import { useEffect } from 'react';
import { navigate } from 'gatsby';

export default function CaseStudiesPage() {
  useEffect(() => {
    navigate('/customers/');
  });
  return null;
}
