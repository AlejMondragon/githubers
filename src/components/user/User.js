import React from 'react'
import Repos from './Repos'
import classes from './User.module.css'

const User = ({profile, repos}) => {
  return (
    <div className={classes['user-container']}>
      <div className={classes.profile}>
        <h3>{profile ? profile.name : ''}</h3>
        <div className={classes.image}>
          <img src={profile ? profile.avatar_url : ''} alt="Profile"></img>
        </div>
        <a 
          href={profile ? profile.html_url : ''}
          target="_blank" 
          rel="noreferrer"
          className={classes['profile__info__link']}
        >View Profile</a>
        <span>Public Repos: {profile ? profile.public_repos : '-'}</span>
        <span>Public Gists: {profile ? profile.public_gists : '-'}</span>
        <span>Followers: {profile ? profile.followers : '-'}</span>          <span>Following: {profile ? profile.following : '-'}</span>
      </div>
      <ul className={classes['latest-repos']}>
        <h2>Public Repos</h2>
        {repos < 1 ? <p style={{'color': 'white'}}>No repos found...</p> : (
          repos.map(repo => (
          <Repos 
            key={repo.id}
            name={repo.name}
            url={repo.html_url}
            stars={repo.stargazers_count}
            watchers={repo.watchers}
            forks={repo.forks}
          />
          ))
        )}
      </ul>
    </div>
  )
}

export default User
