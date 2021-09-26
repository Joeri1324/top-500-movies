import React from 'react'

type ContextType = {
  order: 'asc' | 'desc',
  setOrder: React.Dispatch<React.SetStateAction<"asc" | "desc">>,
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
} | {
  order: 'asc' | 'desc',
  setOrder: null
  page: number,
  setPage: null
}

export const context = React.createContext<ContextType>({
  order: 'asc',
  setOrder: null,
  page: 1,
  setPage: null,
})

const PaginationContext = ({ children }: { children: React.ReactNode }) => {
  const [page, setPage] = React.useState(1)
  const [order, setOrder] = React.useState<'asc' | 'desc'>('desc')

  return (
    <context.Provider
      value={{
        order,
        setOrder,
        page,
        setPage,
      }}
    >
      {
        children
      }
    </context.Provider>
  )
}

export default PaginationContext
