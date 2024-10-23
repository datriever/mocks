import { ColDef } from 'ag-grid-community'

export type Scalar = {
  tag: 'scalar'
  dtype: 'string' | 'bool' | 'date'
  nullable?: boolean
}

export type Metric = {
  tag: 'metric'
  dtype: 'int' | 'float'
  nullable?: boolean
  unit?: string
}

export type Select = {
  tag: 'select'
  dtype: 'select' | 'multiselect'
  options: string[]
}

export type DType = Scalar | Metric | Select

export type Field = {
  name: string
  dtype: DType
}

export type Schema = Field[]

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function header(field: Field) {
  return capitalize(field.name)
}

function format(value: string, dtype: DType): string {
  return (
    dtype.tag === 'metric' && dtype.unit ? `${value} ${dtype.unit}` :
    dtype.dtype === 'date' ? new Date(value).toLocaleString() :
    value
  )
}

export function columnDef(field: Field): ColDef {
  return {
    headerName: header(field),
    field: field.name,
    editable: true,
    filter: true,
    sortable: true,
    resizable: true,
    valueFormatter: ({ value }) => format(value, field.dtype),
  }
}

export function columnDefs(schema: Schema): ColDef[] {
  return schema.map(columnDef)
}