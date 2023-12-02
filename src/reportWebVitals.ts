import { type ReportHandler } from 'web-vitals'

const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  if (onPerfEntry !== null && onPerfEntry !== undefined && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    }).catch((error) => {
      // Handle the error here
      console.error('Error importing web-vitals:', error)
    })
  }
}

export default reportWebVitals
