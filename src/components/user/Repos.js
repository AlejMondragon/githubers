import React from 'react'
import classes from './Repos.module.css'

const Repos = (props) => {

  return (
    <li className={classes['latest-repos__repo']}>
      <a href={props.url} target="_blank" rel='noreferrer'>{props.name} :</a>
      <p>Stars: {props.stars}</p>
      <p>Watchers: {props.watchers}</p>
      <p>Forks: {props.forks}</p>
    </li>
  )
}

export default Repos
