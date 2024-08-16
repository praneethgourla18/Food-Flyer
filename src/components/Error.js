import React from 'react'

import { useRouteError } from 'react-router-dom'

const Error = () => {

  const err=useRouteError();
  console.log(err);
  return (
    <div>
        <h1>oooops!</h1>
        <p>The page you're looking for doesn't exist.</p>
        <p>{err.status}</p>
        <p>Please go back to the <a href="/">home page</a>.</p>
    </div>
  )
}

export default Error