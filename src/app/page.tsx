import Head from 'next/head';
import Link from 'next/link';

import { ArticleListItem } from '@/components/article-list-item';
import { articleService } from '@/features/article/article.service';

const Home = async () => {
  const articles = await articleService.getArticles();
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Hello.</h1>
        <p>
          I&apos;m Nicolas, and I am currently working as a full-stack
          developer. Software development is my passion, and I always seek new
          challenges. I also have an interest in self-hosting. I run a modest
          home lab where I host multiple services that I use daily. I created
          this blog to share some of the things I&apos;ve learned.
        </p>
        <h2>
          <Link href="/blog">Blog</Link>
        </h2>
        <hr />
        <ul>
          {articles.map((article) => (
            <li key={article.slug}>
              <ArticleListItem article={article} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const metadata = {
  title: 'Home | vitaterna.ca',
};

export default Home;
