import { contextize } from 'contextize'
import { Schema } from './schema.js'
import { useMemo } from 'react'

export type Version = {
  id: string
  timestamp: Date
  schema: Schema
  data: any[]
}

function random(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function round(value: number, decimals: number) {
  return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals)
}

const v1: Version = {
  id: 'v1',
  timestamp: new Date('2024-10-01T12:00:00Z'),
  schema: [
    { name: 'date', dtype: { dtype: 'date', tag: 'scalar' } },
    { name: 'price', dtype: { dtype: 'float', tag: 'metric', unit: '€' } },
    { name: 'demand', dtype: { dtype: 'float', tag: 'metric' } },
    { name: 'supply', dtype: { dtype: 'float', tag: 'metric' } },
  ],
  data: Array.from({ length: 23 }, (_, i) => {
    const date = new Date('2024-10-01')
    date.setDate(date.getDate() + i)
    const demand = round(random(80, 120), 0)
    const supply = round(random(80, 120), 0)
    const price = round((demand + supply) / 2 + random(-5, 5), 2)
    return {
      date: date.toISOString().split('T')[0],
      price,
      demand,
      supply
    }
  })
}

const versions: Version[] = [v1]

export type Context = {
  versions: Version[]
  version: Version
}

function useController(): Context {
  return useMemo(() => ({ versions, version: versions[0] }), [])
}

export const history = contextize(useController)