import React from 'react'
import classes from './index.module.css'

const Icon = ({
  char,
  onClick,
  size,
}: {
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
  size: number,
  char: string,
}): React.ReactElement => (
  <div
    className={classes.root}
    onClick={onClick}
    style={{ fontSize: `${size}px` }}
  >
    { char }
  </div>
)

export default Icon
