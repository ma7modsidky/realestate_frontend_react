import React, { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import UserContext from '../../context/UserContext'
import { useAuth0 } from '@auth0/auth0-react'
import { useMutation } from 'react-query'
import { createUser } from '../../utils/api'

function Layout() {
  const {isAuthenticated, user, getAccessTokenWithPopup} = useAuth0()
  const {setUserDetails}= useContext(UserContext)
  const {mutate} = useMutation({
    mutationKey: [user?.email],
    mutationFn: (token)=> createUser(user?.email, token)
  })

  useEffect(()=> {
    const getTokenAndRegister = async () => {
      const response = await getAccessTokenWithPopup({
        authorizationParams: {
          audience: "https://localhost:8080",
          scope: "openid profile email",
        }
      })
      localStorage.setItem('access_token', response)
      setUserDetails(prev => ({...prev, token:response}))
      mutate(response)
    }
    isAuthenticated && mutate()
  }, [isAuthenticated])
  return (
    <>
    <div>
        <Header />
        <Outlet />
    </div>
    <Footer />
    </>
  )
}

export default Layout