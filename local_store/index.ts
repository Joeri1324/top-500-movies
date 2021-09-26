import React from 'react'

const storageName = 'top-movies-starred-cache'

export const useIsStarred = (): [(movieId: number) => boolean, (movieId: number) => void] => {
  const [isStarredCache, setIsStarredCache] = React.useState<Record<number, boolean>>({})

  React.useEffect(() => {
    const starred = localStorage.getItem(storageName)

    if (starred !== null) {
      const parsedStorage = JSON.parse(starred)
      setIsStarredCache(parsedStorage)
    }
  }, [])

  const setStarred = React.useCallback((movieId: number) => {
    setIsStarredCache(starred => {
      const newStarred = {
        ...starred,
        [movieId]: !starred[movieId]
      }

      localStorage.setItem(storageName, JSON.stringify(newStarred))
      return newStarred
    })
  }, [setIsStarredCache])

  const isStarred = (movieId: number) => !!isStarredCache[movieId]

  return [
    isStarred,
    setStarred,
  ]
}
