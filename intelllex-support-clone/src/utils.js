const convertToId = str => {
  return str.toLowerCase().split(' ').join('-');
};

module.exports = { convertToId };
