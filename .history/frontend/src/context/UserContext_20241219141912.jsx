import React, { createContext, useContext, useState } from 'react'

export const UserDataContext = createContext();

const UserContext = ({children}) => {

    const [user,setUser] = useState({
        email: '',
        fullname:{
            firstname: '',
            lastname:''
        }
    })

  return (
    <>
      
    </>
  )
}

export default UserContext
