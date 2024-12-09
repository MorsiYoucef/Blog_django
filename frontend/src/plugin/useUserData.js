import React from 'react'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

function useUserData() {
  // Retrieve the access token and refresh token from browser cookies
  let access_token = Cookies.get('access_token')
  let refresh_token = Cookies.get('refresh_token')

  try {
    if (access_token && refresh_token) {
      const token = refresh_token
      const decoded = jwtDecode(token)
      return decoded
    }
  } catch (error) {
    console.error('Failed to decode token:', error)
    return null // Return null if token decoding fails
  }

  return null
}

export default useUserData
