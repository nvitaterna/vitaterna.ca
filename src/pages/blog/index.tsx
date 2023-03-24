import { NextPageWithLayout } from "next";

import BaseLayout from "@/components/base-layout";

const BlogPage: NextPageWithLayout = () => {
  return <div>Blog</div>;
};

BlogPage.getLayout = (component) => {
  return <BaseLayout>
    {component}
  </BaseLayout>
};

export default BlogPage;
