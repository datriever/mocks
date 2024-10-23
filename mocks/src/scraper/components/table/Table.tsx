import { useCallback, useMemo } from 'react'
import { Box } from '@chakra-ui/react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'
import './table.css'
import { columnDefs, history } from '@scraper/controller'
import { GridReadyEvent } from 'ag-grid-community'

export function Table(props: Parameters<typeof Box>[0]) {
  const { version } = history.use()
  const colDefs = useMemo(() => columnDefs(version.schema), [version])

  const onGrid = useCallback((event: GridReadyEvent) => {
    event.api.sizeColumnsToFit()
  }, [])

  return (
    <Box className='ag-theme-quartz-dark' {...props}>
      <AgGridReact onGridReady={onGrid} columnDefs={colDefs} rowData={version.data} />
    </Box>
  )
}

export default Table