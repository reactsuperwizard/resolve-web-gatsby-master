function defaultGetter(node) {
  return node.childImageSharp.gatsbyImageData;
}

export function edgesByName(collection, getter = defaultGetter) {
  return collection.edges.reduce(
    (memo, edge) => ({
      ...memo,
      [edge.node.name]: getter(edge.node),
    }),
    {}
  );
}
