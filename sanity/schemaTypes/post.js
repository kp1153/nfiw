// schemas/post.js

export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "language",
      title: "Language",
      type: "string",
      options: {
        list: [
          { title: "Hindi", value: "hindi" },
          { title: "English", value: "english" },
          { title: "Punjabi", value: "punjabi" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "text",
      rows: 20,
    },
    {
      name: "link",
      title: "Original WordPress Link",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "title",
      language: "language",
      date: "publishedAt",
      media: "mainImage",
    },
    prepare({ title, language, date, media }) {
      return {
        title: title,
        subtitle: `${language} - ${new Date(date).toLocaleDateString()}`,
        media: media,
      };
    },
  },
};
