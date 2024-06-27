"use server";
import axios from "axios";

export const onGetBlogPosts = async () => {
  try {
    const postArray: {
      id: string;
      title: string;
      image: string;
      content: string;
      createdAt: Date;
    }[] = [];

    const postUrl = process.env.CLOUDWAYS_POST_URL;
    if (!postUrl) return;
    const posts = await axios.get(postUrl);
    const featuredImages = process.env.CLOUDWAYS_FEATURED_IMAGES_URL;
    if (!featuredImages) return;

    let postIndex = 0;
    while (postIndex < posts.data.length) {
      const image = await axios.get(`${featuredImages}/${posts.data[postIndex].featured_media}`);
      if (image) {
        console.log(image.data.meda_details);
        const post: {
          id: string;
          title: string;
          image: string;
          content: string;
          createdAt: Date;
        } = {
          id: posts.data[postIndex].id,
          title: posts.data[postIndex].title.rendered,
          image: image.data.media_details.sizes.full.source_url,
          content: posts.data[postIndex].content.rendered,
          createdAt: new Date(posts.data[postIndex].date),
        };
        postArray.push(post);
      }
      postIndex++;
    }

    if (posts.data) {
      return postArray;
    }
  } catch (error) {
    console.error(error);
  }
};

export const onGetBlogPost = async (id: string) => {
  try {
    const postUrl = process.env.CLOUDWAYS_POSTS_URL;
    if (!postUrl) return;
    const post = await axios.get(`${postUrl}/${id}`);
    if (post.data) {
      const authorUrl = process.env.CLOUDWAYS_AUTHORS_URL;
      if (!authorUrl) return;
      const author = await axios.get(`${authorUrl}${post.data.author}`);
      if (author.data) {
        return {
          id: post.data.id,
          title: post.data.title.rendered,
          content: post.data.content.rendered,
          createdAt: new Date(post.data.date),
          author: author.data.name,
        };
      }
    }
  } catch (error) {
    console.log(error);
  }
};
