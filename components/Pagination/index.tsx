import React from 'react'
import Icon from '../Icon'
import classes from './index.module.css'
import { context } from '../../pagination_context'

export const MAXIMUM_ITEMS = 500
export const ITEMS_PER_PAGE = 20
export const MAXIMUM_PAGES = Math.ceil(MAXIMUM_ITEMS / ITEMS_PER_PAGE)

const Pagination = (): React.ReactElement => {
  const { page, setPage } = React.useContext(context)

  const increment = React.useCallback(() => {
    if (setPage === null) {
      return
    }

    setPage((oldPage) => {
      if (oldPage !== MAXIMUM_PAGES) {
        return oldPage + 1
      }
      return oldPage
    })
  }, [setPage])

  const decrement = React.useCallback(() => {
    if (setPage === null) {
      return
    }

    setPage((oldPage) => {
      if (oldPage !== 1) {
        return oldPage - 1
      }
      return oldPage
    })
  }, [setPage])

  return (
    <div className={classes.root}>
      page:
      <Icon
        char="←"
        size={20}
        onClick={decrement}
      />
      { page }
      <Icon
        onClick={increment}
        size={20}
        char="→"
      />
    </div>
  )
}

export default Pagination
