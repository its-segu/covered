

export const addToCustomers = (store, data) => {
  const newUserValue = store.state.customers.push(data);
  store.setState({ newUserValue });
};
