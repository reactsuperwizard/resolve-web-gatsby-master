import React from 'react';
import { colors } from '../constants';
import { Highlight, Snippet } from 'react-instantsearch-hooks-web';

export function BlogSearchResult({ hit, ...props }) {
  return (
    <li {...props}>
      <a href={`/blog/post/${hit.fields.slug['en-US']}`}>
        <h3>
          <Highlight hit={hit} attribute={['fields', 'title', 'en-US']} />
        </h3>
        <p>
          <Snippet hit={hit} attribute={['fields', 'description', 'en-US']} />
        </p>
        <style jsx>{`
          a {
            padding: 1rem;
          }
          a :global(mark) {
            background: ${colors.yourPink};
          }
          h3 {
            color: ${colors.primary};
            margin: 0 0 1rem;
          }
          p {
            color: ${colors.primary};
            margin: 0;
          }
        `}</style>
      </a>
    </li>
  );
}
