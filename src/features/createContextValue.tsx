import React, { useContext, useMemo } from "react";

/**
 * creates a Context provider and consumer hook to a provided value.
 */
export default function createContextValue<T>(
  name: string,
  defaultValue: T | undefined = undefined
) {
  const ValueContext = React.createContext(defaultValue);

  type ProviderProps = {
    children: React.ReactNode;
    value?: T;
  };

  /**
   * Provides the value of the context.
   * It memoizes the provided value and recompute when `value` changes.
   */
  function Provider({ value, children }: ProviderProps) {
    const contextValue = useMemo(() => value ?? defaultValue, [value]);
    return (
      <ValueContext.Provider value={contextValue}>
        {children}
      </ValueContext.Provider>
    );
  }

  /**
   * Reads the value of the context.
   * Throws an error if the component is not wrapped in a Provider
   * or if the context value is strictly undefined.
   */
  function useValue() {
    const contextValue = useContext(ValueContext);
    if (contextValue === undefined) {
      throw new Error(
        `use ${name} must be used within a ${name} value provider`
      );
    }
    return contextValue;
  }

  return [Provider, useValue] as const;
}
