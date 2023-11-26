export const convertObjectToQueryString = <T extends string, U>(
  params: Record<T, U>,
) => {
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
