/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import 'typeface-roboto';

import { UserProvider } from './src/context/UserContext'

export const wrapRootElement = ({ element }) => (
    <UserProvider>{element}</UserProvider>
  )