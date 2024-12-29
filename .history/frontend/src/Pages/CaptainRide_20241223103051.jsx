import React from 'react'
import { useParams } from 'react-router-dom'

const CaptainRide = () => {
     const {id} = useParams()
  return (
    <div>
      captain ride {id}
    </div>
  )
}

export default CaptainRide
