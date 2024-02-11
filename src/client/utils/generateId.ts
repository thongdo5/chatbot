export const generateId = (prefix = 'id') => {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substr(2, 5);

  return `${prefix}_${timestamp}_${random}`;
};
