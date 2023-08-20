

export default function DetailPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <div>details page: { params.slug}</div>
    </div>
  )
}
