import React from 'react';
import classNames from 'classnames';

import algoliaSearch from 'algoliasearch/lite';
import { getAlgoliaResults } from '@algolia/autocomplete-preset-algolia';
import { createAutocomplete } from '@algolia/autocomplete-core';

import { BlogSearchResult } from './BlogSearchResult';
import { colors } from '../constants';

import '@algolia/autocomplete-theme-classic';

import SearchIcon from '../images/common/search-icon.inline.svg';
import ResetIcon from '../images/common/reset-icon.inline.svg';

const searchClient = algoliaSearch(
  'SPHZWLTD4I',
  '27d19ef3392857d5f84e55f52b06fdf9'
);

export default function BlogSearch() {
  const [autocompleteState, setAutocompleteState] = React.useState({});

  const autocomplete = React.useMemo(
    () =>
      createAutocomplete({
        onStateChange({ state }) {
          setAutocompleteState(state);
        },
        getSources() {
          return [
            {
              sourceId: 'CtflPosts',
              getItemInputValue({ item }) {
                return item.query;
              },
              getItems({ query }) {
                return getAlgoliaResults({
                  searchClient,
                  queries: [
                    {
                      indexName: 'CtflPosts',
                      query,
                      params: {
                        hitsPerPage: 5,
                        highlightPreTag: '<mark>',
                        highlightPostTag: '</mark>',
                      },
                    },
                  ],
                });
              },
              getItemUrl({ item }) {
                return `/blog/post/${item.fields.slug['en-US']}`;
              },
            },
          ];
        },
      }),
    []
  );

  const formRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const panelRef = React.useRef(null);

  const { getEnvironmentProps } = autocomplete;

  // closes keyboard on mobile when scrolling
  React.useEffect(() => {
    if (!(formRef.current && inputRef.current && panelRef.current)) return;

    const { onTouchStart, onTouchMove } = getEnvironmentProps({
      formElement: formRef.current,
      inputElement: inputRef.current,
      panelElement: panelRef.current,
    });

    window.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchmove', onTouchMove);

    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [getEnvironmentProps, formRef, inputRef, panelRef]);

  return (
    <div className="aa-Autocomplete" {...autocomplete.getRootProps({})}>
      <form
        ref={formRef}
        className="aa-Form"
        {...autocomplete.getFormProps({ inputElement: inputRef.current })}
      >
        <div className="aa-InputWrapperPrefix">
          <label htmlFor="submit" className="aa-Label" {...autocomplete.getLabelProps({})}>
            <button className="aa-SubmitButton" type="submit" title="Submit">
              <SearchIcon className="aa-SubmitIcon" />
            </button>
          </label>
        </div>
        <div className="aa-InputWrapper">
          <input
            ref={inputRef}
            className="aa-Input"
            {...autocomplete.getInputProps({})}
            placeholder="Search…"
          />
        </div>
        <div className="aa-InputWrapperSuffix">
          <button className="aa-ClearButton" type="reset" title="Clear">
            <ResetIcon className="ClearIcon" />
          </button>
        </div>
      </form>
      <div
        ref={panelRef}
        className={classNames('aa-Panel', {
          'aa-Panel--stalled': autocompleteState.status === 'stalled',
          'aa-Panel--hidden': !autocompleteState.isOpen,
        })}
        {...autocomplete.getPanelProps({})}
      >
        {autocompleteState.isOpen &&
          autocompleteState?.collections?.map((collection, index) => {
            const { source, items } = collection;

            return (
              <div className="aa-PanelLayout aa-Panel--scrollable">
                <section key={`source-${index}`} className="aa-Source">
                  {items.length > 0 && (
                    <ul className="aa-List" {...autocomplete.getListProps()}>
                      {items.map(item => (
                        <BlogSearchResult
                          hit={item}
                          key={item.objectID}
                          className="aa-Item"
                          {...autocomplete.getItemProps({ item, source })}
                        />
                      ))}
                    </ul>
                  )}
                </section>
              </div>
            );
          })}
      </div>
      <style jsx>
        {`
          .aa-Autocomplete {
            max-width: 48rem;
            margin: 2rem auto;
            position: relative;
          }

          .aa-Panel {
            z-index: 1;
            width: 100%;
          }
          .aa-Panel--hidden {
            opacity: 0;
            transition: 0s;
          }

          .aa-Form {
            border: solid 1px ${colors.inputBorder};
          }
          .aa-Form:focus-within {
            box-shadow: none;
            outline: auto;
          }

          .aa-Label :global(svg) {
            color: ${colors.primary};
          }

          .aa-Label :global(+ div > svg) {
            color: ${colors.primary};
          }
        `}
      </style>
    </div>
  );
}
