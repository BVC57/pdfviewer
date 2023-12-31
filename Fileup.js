import React from 'react'
import '../App.css'
import {useState, useRef} from 'react'


const Fileup = () => {

  const [file , setFile] = useState(false)

// handle file upload
const fileInputField = useRef(null);

 const handleFileChange = (e) => {
    setFile(e.target.files[0].name);
 }
  return (
    <div className="container">
        <div className='fileName'>
             <a>{file}</a>
        </div>
        <input id ="file-upload" type='file' onChange={handleFileChange} ref={fileInputField}/>
        <div className="file-search-button">

            <label htmlFor='file' className='custom-file-upload' onClick={() => fileInputField.current.click()}>
                CLICK TO UPLOAD FILE
            </label>
        </div>
    </div>
  )
}

export default Fileup