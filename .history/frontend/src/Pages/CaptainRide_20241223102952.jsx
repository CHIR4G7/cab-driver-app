import React from 'react'
import { useParams } from 'react-router-dom'

const CaptainRide = () => {
     const {params} = useParams()
  return (
    <div>
      captain ride {params.id}
    </div>
  )
}

export default CaptainRide
