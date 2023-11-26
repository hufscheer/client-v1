import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import {
  Children,
  isValidElement,
  ReactElement,
  ReactNode,
  useCallback,
  useMemo,
} from 'react';

export interface FunnelProps<T extends string[]> {
  steps: T;
  step: T[number];
  children: Array<ReactElement<StepProps<T>>> | ReactElement<StepProps<T>>;
}

export interface StepProps<T extends string[]> {
  name: T[number];
  children?: ReactNode;
}

const Funnel = <T extends string[]>({
  steps,
  step,
  children,
}: FunnelProps<T>) => {
  const validChildren = Children.toArray(children)
    .filter(isValidElement)
    .filter(i =>
      steps.includes((i.props as Partial<StepProps<T>>).name ?? ''),
    ) as Array<ReactElement<StepProps<T>>>;

  const targetStep = validChildren.find(child => child.props.name === step);

  return <>{targetStep || null}</>;
};

const Step = <T extends string[]>({ children }: StepProps<T>) => {
  return <>{children}</>;
};

export const useFunnel = <T extends string[]>(
  steps: T,
  defaultStep: T[number],
) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setStep = useCallback(
    (step: T[number]) => {
      router.push({ query: { step } });
    },
    [router],
  );

  const FunnelComponent = useMemo(() => {
    return Object.assign(
      (props: Omit<FunnelProps<T>, 'step' | 'steps'>) => {
        const step = searchParams.get('step') ?? defaultStep;

        return <Funnel<T> steps={steps} step={step} {...props} />;
      },
      { Step },
    );
  }, [defaultStep, searchParams, steps]);

  return [FunnelComponent, setStep] as const;
};
