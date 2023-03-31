import React, {useState} from 'react';
import Navbar from '../components/Navbar/Navbar'
import '../styles/PDFViewer.css'

function PDFViewer() {

    const [pdf, setPdf] = useState(false);

    const handleOpen = () =>{
        setPdf(!pdf);
    }
    
  return (
    <div>
        <Navbar/>   
        <div className="pdf-container">
      <button onClick={handleOpen} className="pdf-button">View Template Course Outline</button>
      <div className="pdf-viewer">
        {pdf && <iframe
          src="ECE3375B_outline.pdf"
          width="100%"
          height="100%"
          title="My PDF"
        ></iframe>}
        {pdf && <iframe
          src="SE4455_ECE9016_CourseOutlines_updated.pdf"
          width="100%"
          height="100%"
          title="My PDF"
        ></iframe>}
      </div>
    </div>
    </div>
  );
}

export default PDFViewer;
