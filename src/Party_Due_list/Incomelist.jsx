import React, { useState } from 'react'
import { Link } from 'react-router-dom';


import { BsThreeDotsVertical } from 'react-icons/bs';
import { LuPrinter } from 'react-icons/lu';

import { FaFilePdf } from 'react-icons/fa6';
import { FaFileCsv } from 'react-icons/fa';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { useRef } from 'react';
import ToggleButton from '../OnOffbutton'
// Editincomecategory

const Incomelist = () => {
  

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  // print tablenmfnjidsgdf
 
  const handlePdf=async()=>{

    const doc = new jsPDF()
    doc.autoTable({ html: '.tableone' })
    doc.save('table.pdf')
  }


  const [deletebutton, setdeletebutton] = useState(false);
  return (
    <div className='w-100 px-3 bg-white' style={{height:"100vh"}}>
            <div className='w-auto pt-4 mt-10 h-10 flex flex-row justify-between '> 
<h1 className='fw-bold' style={{fontSize:"20px"}}>Income List
</h1>
<div className=' w-80 flex justify-between h-9' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>
<Link  className='w-36  pl-3 pt-2 font-semibold  h-9 text-white rounded-t-md bg-purple-700' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Income List</Link>
<Link to='/addnewincome' className='w-64 h-9 text-md text-black  pt-2 pl-3' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Add New Income Category </Link>

</div>
      </div>
      <hr className='bg-red-400 mt-5 w-100 '/>
 <div className='w-full flex justify-end h-16 items-center'>    
<div className='w-40 flex  justify-center gap-3 items-center'>
<LuPrinter onClick={handlePrint}  className='text-red-400' style={{fontSize:"20px"}} />

<LuPrinter onClick={handlePrint} className='text-green-400'  style={{fontSize:"20px "}} />
<FaFilePdf onClick={handlePdf}  className='text-purple-500' style={{fontSize:"20px"}} />
<FaFileCsv  className='text-pink-400' style={{fontSize:"20px"}}/>
</div> 
</div>
  
       {/* table */}
       <table ref={componentRef} className="w-full  tableone p-2" style={{fontFamily:"monospace",fontSize:"15px"}}>
  <thead>
    <tr className='bg-slate-200 h-10' >
      <th scope="col">SL.</th>
      <th scope="col">Party Name</th>
      <th scope="col"> Catagory Name</th>
      <th scope="col">Description</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr className='h-10 border'>
      <th scope="row">1</th>
      <td>0000003</td>
      <td>25 Jul, 2024</td>
      {/* darkmodebtn */}
      <td>NR</td>
      <td><ToggleButton/></td>
      <td className='relative'>  <BsThreeDotsVertical className='w-12' onClick={()=>setdeletebutton((preve)=>!preve)}/>
     {deletebutton && <div className='absolute top-9 -left-6'>
    
      </div>}
        </td>
   </tr>
  
  </tbody>
</table>
    </div>
  )
}

export default Incomelist