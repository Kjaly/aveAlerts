import React, {FC} from 'react';
import {BodyWrapper} from "./Body.styles";
import Button from "../Button/Button";

const Body: FC = () => {

  const clientId = process.env.REACT_APP_DONATION_API_CLINT_ID
  const clientSecret= process.env.REACT_APP_DONATION_API_CLINT_SECRET
  const redirectURL = process.env.REACT_APP_REDIRECT_URL
  const scope = 'oauth-user-show'
  // const uri = `${cors}https://www.donationalerts.com/oauth/token?grant_type=authorization_code&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectURL}&code`
  const uri = `https://www.donationalerts.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectURL}&response_type=code&scope=${scope}`


  const loginFetch = async () => {
    const response = await fetch(uri,{
      method:'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    })
    // console.log(await response.json())
  return await response.json()
  }
  return (
    <BodyWrapper>
        <Button uri={uri} onClick={loginFetch} title={'Donation Alerts Login'}/>
    </BodyWrapper>
  );
};

export default Body;
