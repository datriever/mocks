import { VStack, Box, Text, Heading } from "@chakra-ui/react"
import Plot from 'react-plotly.js'

export function Main(props: Parameters<typeof VStack>[0]) {
  return (
    <Box overflowY='auto' p='2rem' {...props}>
      <VStack w='54.7vw' alignItems="start">

        {/* Heading */}
        <Heading fontSize="2.5rem">Greener Energy Recommendation</Heading>
        <Heading fontSize='1.2rem'>Overview</Heading>
        {/* Energy Summary */}
        <Box bg="green.800" p={4} borderRadius="md">
          <Text>
            Based on current data, the greener energy sources (e.g., solar and wind) are most available from <strong>11 AM to 3 PM</strong>.
          </Text>
          <Text>
            We recommend shifting your energy consumption during these hours to minimize your carbon footprint.
          </Text>
        </Box>


        <Text>Based on the forecasts, the expected availability over the next semester will roughly follow this distribution:</Text>
        {/* Plotly Chart for Energy Usage */}
        <Plot w='100%'
          data={[
            {
              x: ['8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM'],
              y: [30, 50, 80, 120, 60, 40],
              type: 'bar',
              marker: { color: 'green' },
              name: 'Renewable Energy Usage (kWh)',
            }
          ]}
          layout={{
            title: 'Renewable Energy Availability Over Time',
            xaxis: { title: 'Time of Day' },
            yaxis: { title: 'Energy (kWh)' },
            showlegend: true,
          }}
        />
      </VStack>
    </Box>
  )
}

export default Main
