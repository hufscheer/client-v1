import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function useQueryParams() {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const appendToParams = (key: string, value: string) => {
    const newParams = new URLSearchParams(params.toString());
    const targetParams = newParams.getAll(key);

    if (targetParams.includes(value)) {
      newParams.delete(key, value);
    } else {
      newParams.append(key, value);
    }
    router.push(`${pathname}?${newParams.toString()}`);
  };

  const setInParams = (key: string, value: string) => {
    const newParams = new URLSearchParams(params.toString());

    if (newParams.get(key) === value) return;

    newParams.set(key, value);
    router.push(`${pathname}?${newParams.toString()}`);
  };

  return { params, appendToParams, setInParams };
}
