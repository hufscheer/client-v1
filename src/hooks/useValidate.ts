import { useEffect, useState } from 'react';

type DataType = string | number | Date | File;

export default function useValidate(
  data: DataType,
  cb: (value: DataType) => boolean,
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
