import React from 'react'
import { useParams } from 'react-router-dom'

const UserRide = () => {
    const {params} = useParams();
  return (
    <div>
      user {params}
    </div>
  )
}

export default UserRide
