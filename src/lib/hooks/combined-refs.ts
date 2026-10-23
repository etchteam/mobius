import { useEffect, useRef } from 'react';

// https://www.alltimepower.com/blog/react-hook-forms-custom-checkbox/
// tl;dr make custom inputs work like normal inputs
export default function useCombinedRefs(...refs) {
  const targetRef = useRef<any>();

  useEffect(() => {
    const assign = (value) => {
      refs.forEach((ref) => {
        if (!ref) return;

        if (typeof ref === 'function') {
          ref(value);
        } else {
          // eslint-disable-next-line no-param-reassign
          ref.current = value;
        }
      });
    };

    assign(targetRef.current);

    // Callback refs such as react-hook-form's register() must receive null
    // when the element unmounts, or the form keeps validating a removed field
    return () => assign(null);
  }, [refs]);

  return targetRef;
}
