

export default function RecipesByTags({ params }: { params: { tag: string } }) {
    return (
      <div>
        <div>recipes by tags page: { params.tag}</div>
      </div>
    )
  }
  