'use client'

import { Stack } from '@chakra-ui/react'

import SearchBar from '@/components/SearchBar'
import CardRecipe from './components/CardRecipe'

export default function Home() {
  return (
    <main className="main">
      <Stack spacing={3} width={["90%", "80%","70%","60%","50%"]}>
        
        <SearchBar />    

        

        <CardRecipe />   
        
        
      </Stack>
      
    </main>
  )
}
