import {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useCallback,
} from 'react';

type UsePersistedStateRes<T> = [
  T,
  Dispatch<SetStateAction<T>>,
]

export const usePersistedState = <T>(key: string, initialState: T): UsePersistedStateRes<T> => {
  const [state, setState] = useState(initialState);

  const handleState = useCallback((theme: T) => {
    setState(theme);
  }, [state]);

  useEffect(() => {
    const persistedValue = localStorage.getItem(key);

    setState(JSON.parse((persistedValue || initialState) as unknown as string));
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, handleState as Dispatch<SetStateAction<T>>];
};
