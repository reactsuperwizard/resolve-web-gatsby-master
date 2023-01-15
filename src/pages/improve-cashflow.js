import { useEffect } from 'react';
import { navigate } from 'gatsby';

export default function MoneyRepeatPage() {
  useEffect(() => {
    navigate('/accounts-receivable');
  });
  return null;
}
