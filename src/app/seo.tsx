import React, { FC } from 'react';
import Head from 'next/head';

type Props = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  tags?: Array<{
    name: string;
    content: string;
  }>;
};

export const SEO: FC<Props> = ({
  title,
  description,
  image = '/opengraph-image.png',
  tags = [],
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='website' />
      {image && (
        <>
          <meta name='twitter:image' content={image} />
          <meta property='og:image' content={image} />
        </>
      )}
      {tags.map((tag, index) => (
        <meta key={index} name={tag.name} content={tag.content} />
      ))}
    </Head>
  );
};
