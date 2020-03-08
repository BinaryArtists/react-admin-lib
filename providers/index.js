export default type => {
  console.log('data provider type = ', type)

  switch (type) {
    case 'graphql':
      return import('./graphql').then(factory => factory.default());
    default:
      return import('./rest').then(provider => provider.default);
  }
};
