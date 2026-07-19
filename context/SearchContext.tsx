"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

import { SearchState } from "@/types/search";

// Context interface
type SearchContextType = {

  filters: SearchState;

  updateFilters: (
    data: Partial<SearchState>
  ) => void;

};

// Create Context
const SearchContext = createContext<
  SearchContextType | undefined
>(undefined);

export function SearchProvider({
  children,
}: {
  children: ReactNode;
}) {

  // Search state
  const [filters, setFilters] =
    useState<SearchState>({
      search: "",
      category: "All",
      sort: "",
    });

  // Update filters
  function updateFilters(
    data: Partial<SearchState>
  ) {
    setFilters((previous) => ({
      ...previous,
      ...data,
    }));
  }

  return (
    <SearchContext.Provider
      value={{
        filters,
        updateFilters,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

// Custom Hook
export function useSearchContext() {

  const context =
    useContext(SearchContext);

  if (!context) {

    throw new Error(
      "useSearchContext must be used inside SearchProvider"
    );

  }

  return context;
}