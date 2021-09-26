import React from 'react'
import classes from './index.module.css'

const Row = ({ children }: { children: React.ReactNode }): React.ReactElement => (
  <div className={classes.root}>
    { children }
  </div>
)

export default Row
