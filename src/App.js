import React, { useState } from 'react';
import classes from './App.module.css';
import Card from './components/UI/Card';
import Search from './components/Search';
import User from './components/user/User';

const App = () => {
  const [ profile, setProfile ] = useState(null);
  const [ repos, setRepos ] = useState(null)

  const fetchUserProfile = async (input) => {
    const profileResponse = await fetch(`https://api.github.com/users/${input}?client_id=2b8ff4ba5bae96a2a340&client_secret=ed9f2ec6c01ad10f8e8f83652ebb91429a513448`);

    if(!profileResponse.ok) {
      throw new Error("Something went wrong when fetching the profile's data...")
    }
    const profileData = await profileResponse.json()
    setProfile(profileData)
  }

  const fetchUserRepos = async (input) => {
    const reposResponse = await fetch(`https://api.github.com/users/${input}/repos?per_page=7&sort=created:asc&client_id=2b8ff4ba5bae96a2a340&client_secret=ed9f2ec6c01ad10f8e8f83652ebb91429a513448`);

    if(!reposResponse.ok){
      throw new Error("Something went wrong when fetching the repositories data...")
    }

    const reposData = await reposResponse.json()
    setRepos(reposData)
  }

  const fetchUserData = (input) => {
    try{
      fetchUserProfile(input)
      fetchUserRepos(input)
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1 className={classes.title}>Githubers</h1>
        <Search onDebounceSearch={fetchUserData}/>
      <Card>
        <User profile={profile} repos={repos} />
      </Card>
    </>
  );
}

export default App;
