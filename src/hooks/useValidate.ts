import { useEffect, useState } from 'react';

export default function useValidate(
  data: string | number | Date,
  cb: (value: string | number | Date) => boolean,
) {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (cb(data)) setIsError(true);
    else setIsError(false);
  }, [data, cb]);

  return {
    isError,
  };
}
