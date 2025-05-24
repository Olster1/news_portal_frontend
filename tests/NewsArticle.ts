import { render } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import NewsArticle from '../lib/components/NewsArticle.svelte'; 
import { expect, test } from 'vitest';

const sampleArticle = {
  title: 'Breaking News',
  url: 'https://news.example.com/breaking',
  publishedAt: '2025-05-01T10:00:00Z',
  description: 'This is a short summary of the news.',
  image: 'https://news.example.com/image.jpg',
};

test('renders NewsCard with article data', () => {
  const { getByText, getByRole } = render(NewsArticle, { props: { article: sampleArticle } });

  // Title
  expect(getByText('Breaking News')).toBeInTheDocument();

  // Date formatted - localeDateString format depends on environment, so check for known substring
  expect(getByText(/2025/)).toBeInTheDocument();

  // Description
  expect(getByText('This is a short summary of the news.')).toBeInTheDocument();

  // Link href and target
  const link = getByRole('link');
  expect(link).toHaveAttribute('href', sampleArticle.url);
  expect(link).toHaveAttribute('target', '_blank');

  // Image src and alt
  const image = link.querySelector('img');
  expect(image).toHaveAttribute('src', sampleArticle.image);
  expect(image).toHaveAttribute('alt', sampleArticle.title);
});