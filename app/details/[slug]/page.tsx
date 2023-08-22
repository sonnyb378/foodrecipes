import RecipeDetails from "@/components/Recipe/RecipeDetails";

export default function DetailPage({ params }: { params: { slug: string } }) {
  return (
    <RecipeDetails slug={ params.slug } />
  )
}
