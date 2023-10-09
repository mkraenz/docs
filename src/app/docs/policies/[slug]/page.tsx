import { DocsHeader } from "@/components/DocsHeader";

export default async function Page({ params }: { params: { slug: string } }) {
  if (!params?.slug || typeof params.slug !== "string") {
    throw new Error("Invalid slug");
  }

  return (
    <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-4">
      <DocsHeader title="Policies" />
    </div>
  );
}