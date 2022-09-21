const cutTextIfLong = (str: any, limit: number) => {
  if (str && str.length > limit) {
    return `${str.slice(0, limit)}...`;
  }
  return str;
};

export default cutTextIfLong;
