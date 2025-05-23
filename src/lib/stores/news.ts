//NOTE: This is our 'store' and 'logic' of the news articles.   
import { writable } from 'svelte/store';
import { fetchData } from '$lib/utils/fetchData';
import { API_BACKEND_BASE_URL } from '$lib/constants';
import type { NewsArticle } from '$lib/models/NewsArticle';

export const articles = writable<NewsArticle[]>([]);
export const loading = writable<boolean>(false);
export const showingLatest = writable<boolean>(true);

export async function loadLatestArticles() {
  loading.set(true);
  try {
    const data = await fetchData<NewsArticle[]>(`${API_BACKEND_BASE_URL}/api/news/latest?n=${10}`);
    articles.set(data);
    showingLatest.set(true);
  } catch (error) {
    console.error('Error loading latest articles:', error);
  } finally {
    loading.set(false);
  }
}

export async function querySearchArticles(query: string) {
  loading.set(true);
  try {
    const data = await fetchData<NewsArticle[]>(`${API_BACKEND_BASE_URL}/api/news/search?query=${query}`);
    articles.set(data);
    showingLatest.set(false);
  } catch (error) {
    console.error('Error searching articles:', error);
  } finally {
    loading.set(false);
  }
}