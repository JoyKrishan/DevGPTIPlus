import { useState, useEffect } from 'react';

function useSessionStorage() {
  const [storage, setStorage] = useState(() => {
    const items = { ...window.sessionStorage };
    return Object.keys(items).reduce((acc, key) => {
      acc[key] = JSON.parse(items[key]);
      return acc;
    }, {});
  });

  const getItem = (key) => {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const setItem = (key, value) => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value));
      setStorage((prevStorage) => ({
        ...prevStorage,
        [key]: value,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const removeItem = (key) => {
    try {
      window.sessionStorage.removeItem(key);
      setStorage((prevStorage) => {
        const { [key]: _, ...rest } = prevStorage;
        return rest;
      });
    } catch (error) {
      console.error(error);
    }
  };

  const clear = () => {
    try {
      window.sessionStorage.clear();
      setStorage({});
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.storageArea === window.sessionStorage) {
        const items = { ...window.sessionStorage };
        setStorage(
          Object.keys(items).reduce((acc, key) => {
            acc[key] = JSON.parse(items[key]);
            return acc;
          }, {})
        );
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return {
    getItem,
    setItem,
    removeItem,
    clear,
    storage,
  };
}

export default useSessionStorage;