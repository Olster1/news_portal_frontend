import { describe, it, expect, vi, beforeEach } from 'vitest';
import * as store from '../src/lib/stores/news'
import { get } from 'svelte/store';
import type { NewsArticle } from '$lib/models/NewsArticle';

// Mock fetchData
vi.mock('$lib/utils/fetchData', () => ({
  fetchData: vi.fn()
}));

const mockArticles : NewsArticle[] = [
    {
    title: "",
    description: "",
    content: "",
    url: "",
    image: "",
    publishedAt: "",
    }
];

beforeEach(() => {
  store.articles.set([]);
  store.loading.set(false);
  store.showingLatest.set(true);
  store.error.set('');
});

describe('loadLatestArticles', () => {
  it('loads latest articles and updates the store correctly', async () => {
    const { fetchData } = await import('$lib/utils/fetchData');
    (fetchData as any).mockResolvedValue(mockArticles);

    const loadingStates: boolean[] = [];
    store.loading.subscribe(val => loadingStates.push(val));

    await store.loadLatestArticles();

    expect(get(store.articles)).toEqual(mockArticles);
    expect(get(store.showingLatest)).toBe(true);
    expect(get(store.error)).toBe('');
    expect(loadingStates).toEqual([false, true, false]);
  });

  it('sets error when fetch fails', async () => {
    const { fetchData } = await import('$lib/utils/fetchData');
    (fetchData as any).mockRejectedValue(new Error('Failed'));

    await store.loadLatestArticles();

    expect(get(store.error)).toBe('Error loading latest articles.');
    expect(get(store.loading)).toBe(false);
  });
});

describe('querySearchArticles', () => {
  it('searches and updates the store correctly', async () => {
    const { fetchData } = await import('$lib/utils/fetchData');
    (fetchData as any).mockResolvedValue(mockArticles);

    await store.querySearchArticles('tech');

    expect(get(store.articles)).toEqual(mockArticles);
    expect(get(store.showingLatest)).toBe(false);
    expect(get(store.error)).toBe('');
    expect(get(store.loading)).toBe(false);
  });

  it('sets error when search fails', async () => {
    const { fetchData } = await import('$lib/utils/fetchData');
    (fetchData as any).mockRejectedValue(new Error('Failed'));

    await store.querySearchArticles('fail');

    expect(get(store.error)).toBe('Error loading articles.');
    expect(get(store.loading)).toBe(false);
  });
});