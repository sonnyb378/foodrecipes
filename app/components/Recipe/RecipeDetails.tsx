'use client'

import { Stack } from "@chakra-ui/react";

interface RecipeDetailsProps {
    slug: string;
  }

export default function RecipeDetails( { slug }: RecipeDetailsProps ) {
  return (
    <Stack spacing={3} width={["90%", "80%","70%","60%","50%"]} pb={30}>
      <div>details page: { slug}</div>
    </Stack>
  )
}
