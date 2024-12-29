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
    <UserDataContext.Provider value={{user,setUser}}>
      
    </UserDataContext.Provider>
  )
}

export default UserContext
