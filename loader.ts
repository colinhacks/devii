import matter from 'gray-matter';
import glob from 'glob';
export type PostData = {
  path: string;
  title: string;
  subtitle?: string;
  content: string;
  description?: string;
  canonicalUrl?: string;
  datePublished?: number;
  author?: string;
  authorPhoto?: string;
  tags?: string[];
  bannerPhoto?: string;
  thumbnailPhoto?: string;
};

type RawFile = { path: string; contents: string };

export const loadMarkdownFile = async (path: string): Promise<RawFile> => {
  const mdFile = await import(`./md/${path}`);
  return { path, contents: mdFile.default };
};

export const mdToPost = (file: RawFile): PostData => {
  const metadata = matter(file.contents);

  const post = {
    path: file.path.replace('.md', ''),
    title: metadata.data.title,
    subtitle: metadata.data.subtitle || null,
    datePublished: metadata.data.datePublished || null,
    tags: metadata.data.tags || null,
    description: metadata.data.description || null,
    canonicalUrl: metadata.data.canonicalUrl || null,
    author: metadata.data.author || null,
    authorPhoto: metadata.data.authorPhoto || null,
    bannerPhoto: metadata.data.bannerPhoto || null,
    thumbnailPhoto: metadata.data.thumbnailPhoto || null,
    content: metadata.content,
  };

  if (!post.title) throw new Error(`Missing: title.`);
  if (!post.content) throw new Error(`Missing: content.`);

  return post as PostData;
};

export const loadMarkdownFiles = async (path: string) => {
  const blogPaths = glob.sync(`./md/${path}`);
  const postDataList = await Promise.all(
    blogPaths.map((blogPath) => {
      const modPath = blogPath.slice(blogPath.indexOf(`md/`) + 3);
      return loadMarkdownFile(`${modPath}`);
    })
  );
  return postDataList;
};

export const loadPost = async (path: string): Promise<PostData> => {
  const file = await loadMarkdownFile(path);
  return mdToPost(file);
};

export const loadBlogPosts = async (): Promise<PostData[]> => {
  return await (await loadMarkdownFiles(`blog/*.md`)).map(mdToPost);
};
