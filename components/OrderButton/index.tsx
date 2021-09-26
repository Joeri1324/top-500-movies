import React from 'react'
import { context } from '../../pagination_context'
import classes from './index.module.css'

const OrderButton = (): React.ReactElement => {
  const { order, setOrder } = React.useContext(context)

  const onClick = React.useCallback(() => {
    if (setOrder) {
      setOrder((oldOrder) => {
        if (oldOrder === 'asc') {
          return 'desc'
        }
        return 'asc'
      })
    }
  }, [setOrder])

  return (
    <div onClick={onClick} className={classes.root}>
      {
        order === 'asc' ? '↑ ascending' : '↓ descending'
      }
    </div>
  )
}

export default OrderButton
