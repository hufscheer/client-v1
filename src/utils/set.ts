export const updateSet = <T>(set: Set<T>, value: T) => {
  const target = new Set(set);

  if (target.has(value)) {
    target.delete(value);
  } else {
    target.add(value);
  }

  return target;
};
