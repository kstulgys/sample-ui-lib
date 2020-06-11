/*@jsx jsx*/
import { jsx, keyframes } from '@emotion/core'
import React from 'react'
import logo from './logo.svg'
import { Box, Image, Text, Link, Stack } from '@chakra-ui/core'

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`

function App() {
  return (
    <Stack bg="gray.700" minH={['100vh']} px="4">
      <Stack as="header" mx="auto" my="auto" alignItems="center" color="white">
        <Image src={logo} alt="logo" size="64" animation={`${bounce} 1s ease infinite`} />
        <Text>
          Edit <Box as="code">src/App.tsx</Box> and save to reload.
        </Text>
        <Link isExternal href="https://reactjs.org">
          Learn React
        </Link>
      </Stack>
    </Stack>
  )
}

export default App
