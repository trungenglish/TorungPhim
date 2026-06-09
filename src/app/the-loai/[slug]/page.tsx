type Props = {
  params: Promise<{ slug: string }>;
};

export default async function TheLoaiPage({ params }: Props) {
  const { slug } = await params;

  return (
    <div>
      <h1>Thể loại: {slug}</h1>
    </div>
  );
}
