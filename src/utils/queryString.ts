export const convertObjectToQueryString = (params: {
  [key: string]: string | string[];
}) => {
  const queryString = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(valueItem => queryString.append(key, valueItem));
    } else {
      queryString.append(key, String(value));
    }
  });

  return queryString.toString();
};
