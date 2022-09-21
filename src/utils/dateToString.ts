const dts = (date: any) => {
  const offset = new Date().getTimezoneOffset() * 60000;
  return new Date(date - offset).toISOString().slice(0, 10);
};

export default dts;
