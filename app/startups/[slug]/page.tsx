export default function StartupPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>{params.slug}Page</h1>
    </div>
  );
}
