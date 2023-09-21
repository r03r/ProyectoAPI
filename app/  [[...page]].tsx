// Example file structure, app/[...page]/page.tsx
// You could alternatively use src/app/[...page]/page.tsx
import { builder } from "@builder.io/sdk";
import Head from "next/head";
import { RenderBuilderContent } from "@/components/builder";

// Replace with your Public API Key
builder.init('8009115e640c4c73ac79dd658936d0da');

// Define the expected shape of the props
// object passed to the Page function
interface PageProps {
  params: {
    page: string[];
  };
}

// Async function called Page takes a single
// argument called props of type PageProps
export default async function Page(props: PageProps) {
  const announcementBarContent = await builder
    // Get the page content from Builder with the specified options
    .get("announcement-bar", {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
      // Set prerender to false to prevent infinite rendering loops
      prerender: false,
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      <Head>
        <title>{content?.data.title}</title>
      </Head>
      {/* Render the Builder page */}
      <RenderBuilderContent 
        model="announcement-bar"
        content={announcementBarContent} />
    </>
  );
}
