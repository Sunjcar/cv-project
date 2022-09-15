import React from 'react'
import html2canvas from 'html2canvas'
import {jsPDF} from 'jspdf';

const DownloadPDF = ({rootElementId, downloadFileName}) => {
    const downloadFileDocument = () => {
        const input = document.getElementById(rootElementId)
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png')
            const pdf = new jsPDF ('portrait', 'pt', 'a4')
            pdf.addImage (imgData, 'JPEG', 10, 50)
            pdf.save(`${downloadFileName}`)
        })
    }
  return (
    <div>
        <button className='load-pdf' onClick={downloadFileDocument}> Download PDF</button>
    </div>
  )
}

export default DownloadPDF