import React from 'react'
import { useParams } from 'react-router-dom'

const UserRide = () => {
    const {id} = useParams();
  return (
    <div>
      user {id}
    </div>
  )
}

export default UserRide
