import { contextize } from 'contextize'
import { useMemo } from 'react';

export type Message = {
  role: 'user' | 'assistant';
  text: string;
}

const messages: Message[] = [
  {
    role: 'user',
    text: 'Hey, can you clean the data for missing values?'
  },
  {
    role: 'assistant',
    text: 'Sure! Removing rows with missing values...'
  },
  {
    role: 'user',
    text: 'Great, can you collect prices from the intra-day market also?'
  },
  {
    role: 'assistant',
    text: 'Searching "intra-day market prices"...'
  },
  {
    role: 'assistant',
    text: 'Scraping "omie.es/market-prices"...'
  },
  {
    role: 'assistant',
    text: 'Downloading "omie.es/datasets/market-prices.csv"...'
  },
  {
    role: 'assistant',
    text: 'Merging "market-prices.csv" with the existing data...'
  },
  {
    role: 'assistant',
    text: 'Done! Added 100 new rows.'
  }
]

export type Context = {
  messages: Message[]
}

function useController(): Context {
  return useMemo(() => ({ messages }), [])
}

export const chat = contextize(useController)