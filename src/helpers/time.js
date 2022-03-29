export const getDateTime = (timestamp) => {
  const createdDate = new Date(timestamp);
  return createdDate.toISOString().split('T')[0];
};
