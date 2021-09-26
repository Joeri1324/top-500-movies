import React from 'react'
import classes from './index.module.css'
import OrderButton from '../OrderButton'
import Pagination from '../Pagination'
import Row from '../Row'

const Header = (): React.ReactElement => (
  <div className={classes.root}>
    <img
      alt="logo"
      src="/blue_long_1.svg"
      width={170}
      height={160}
    />

    <div className={classes.container}>
      <Row>
        <OrderButton />
        <Pagination />
      </Row>
    </div>
  </div>
)

export default Header
