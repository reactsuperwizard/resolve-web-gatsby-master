import { useEffect } from 'react';
import { navigate } from 'gatsby';

export default function AffirmPage() {
  useEffect(() => {
    document.cookie = 'resolve_referral=affirm; max-age=4838400; path=/;';
    navigate('/');
  });
  return null;
}
