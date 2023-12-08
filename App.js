// App.js

import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isInformationVisible, setInformationVisible] = useState(true);

  const [isOpposingPartyVisible, setOpposingPartyVisible] = useState(true);

  const toggleInformation = () => {
    setInformationVisible(!isInformationVisible);
  };

  const toggleOpposingParty = () => {
    setOpposingPartyVisible(!isOpposingPartyVisible);
  };


  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };


  return (
    <div className="app">
      <div className={`ellipse-wrapper${currentPage === 0 ? ' black' : ''}`}>
        <div className={`text-wrapper ellipse${currentPage === 0 ? ' black' : ''}`}>
          1
        </div>
        <div className="ellipse-label">Initial Information</div>
      </div>
      <div className={`ellipse-wrapper${currentPage === 1 ? ' blue' : ''}`}>
        <div className={`text-wrapper-2 ellipse${currentPage === 1 ? ' blue' : ''}`}>
          2
        </div>
        <div className="ellipse-label">Party Information</div>
      </div>
      <div className={`ellipse-wrapper${currentPage === 2 ? ' blue' : ''}`}>
        <div className={`text-wrapper-3 ellipse${currentPage === 2 ? ' blue' : ''}`}>
          3
        </div>
        <div className="ellipse-label">Logistics</div>
      </div>
      <div className={`ellipse-wrapper${currentPage === 3 ? ' blue' : ''}`}>
        <div className={`text-wrapper-4 ellipse${currentPage === 3 ? ' blue' : ''}`}>
          4
        </div>
        <div className="ellipse-label">Additional Services</div>
      </div>

      {currentPage === 1 && (
        <>
      <div className="toggle-button" onClick={toggleInformation}>
        <div className="text-1">
          <span className={isInformationVisible ? 'caps' : ''}>^</span>Booking Party Information
        </div>
      </div>
      {isInformationVisible && (
        <>
      <div className = "text-2">(Enter as much as possible)</div>
      <div className = "text-3">Use information on account?</div>
<div className="row">
  <div className="column">
    <label>Firm Name</label>
    <select className="input-box" placeholder="Firm Name">
      <option value="" disabled selected>Input</option>
      <option value="firm1">Firm 1</option>
      <option value="firm2">Firm 2</option>
      {/* Add more options as needed */}
    </select>
  </div>
  <div className="column">
  <label>Booking Contact Name</label>
    <input type="text" className="input-box" placeholder="Type here" />
  </div>
  <div className="column">
  <label>Phone Number (No spaces)</label>
    <input type="text" className="input-box" placeholder="Type here" />
  </div>
</div>


<div className="row-1">
  <div className="column">
  <label>Billing Address</label>
    <input type="text" className="input-box" placeholder="Type here" />
  </div>
  <div className="column">
  <label>Zip/Postal Code</label>
    <input type="text" className="input-box" placeholder="input" />
  </div>
  <div className="column">
  <label>Country/City</label>
    <input type="text" className="input-box" placeholder="Canada" />
  </div>
</div>



<div className="row-2">
    <div className="column">
    <label>Firm Name</label>
      <input type="text" className="input-box" placeholder="Firm Name" />
    </div>
    <div className="column">
    <label>Name of Represented Client</label>
      <input type="text" className="input-box" placeholder="Booking Contact Name" />
    </div>
  </div>


  <div className="row-3">
    <div className="column">
    <label>Firm Name</label>
      <input type="text" className="input-box" placeholder="Phone Number" />
    </div>
    <div className="column">
      <label className='kella'>kella</label>
      <input type="text" className="input-box" placeholder="Email Address" />
    </div>
  </div>
  <div className="row-4">
  <button className="plus">+</button>
    <div className="column">
      <input type="text" className="input-box" placeholder="Address" />
    </div>
    <div className="column">
      <input type="text" className="input-box" placeholder="City" />
    </div>
  </div>
  </>
      )}


      <div className="toggle-button" onClick={toggleOpposingParty}>
        <div className="text-11">
          <span className={isInformationVisible ? 'caps' : ''}>^</span>Opposing Party Information
        </div>
      </div>
      {isOpposingPartyVisible && (
            <>
<div className="row-10">
  <div className="column-10">
    <label>Firm Name</label>
    <select className="input-box" placeholder="Firm Name">
      <option value="" disabled selected>Input</option>
      <option value="firm1">Firm 1</option>
      <option value="firm2">Firm 2</option>
      {/* Add more options as needed */}
    </select>
  </div>
  <div className="column-10">
  <label>Booking Contact Name</label>
    <input type="text" className="input-box" placeholder="Type here" />
  </div>
  <div className="column-10">
  <label>Phone Number (No spaces)</label>
    <input type="text" className="input-box" placeholder="Type here" />
  </div>
</div>

<div className="row-11">
  <div className="column-10">
  <label>Billing Address</label>
    <input type="text" className="input-box" placeholder="Type here" />
  </div>
  <div className="column-10">
  <label>Zip/Postal Code</label>
    <input type="text" className="input-box" placeholder="input" />
  </div>
  <div className="column-10">
  <label>Country/City</label>
    <input type="text" className="input-box" placeholder="Canada" />
  </div>
</div>

<div className="row-12">
    <div className="column-10">
    <label>Firm Name</label>
      <input type="text" className="input-box" placeholder="Firm Name" />
    </div>
    <div className="column-10">
    <label>Name of Represented Client</label>
      <input type="text" className="input-box" placeholder="Booking Contact Name" />
    </div>
  </div>

  <div className="row-13">
    <div className="column-10">
    <label>Firm Name</label>
      <input type="text" className="input-box" placeholder="Phone Number" />
    </div>
    <div className="column-10">
      <label className='kella'>kella</label>
      <input type="text" className="input-box" placeholder="Email Address" />
    </div>
  </div>
  
  <div className="row-14">
  <button className="plus">+</button>
    <div className="column-10">
      <input type="text" className="input-box" placeholder="Address" />
    </div>
    <div className="column-10">
      <input type="text" className="input-box" placeholder="City" />
    </div>
  </div>
  </>
          )}
  <button className='party'> <span className='plus1'>+</span>ADDITIONAL PARTIES</button>
  
  </>
      )}
        











        
  {currentPage === 2 && (
        <>
        <div className="text-1">
          <span className="caps">^</span>Basic Logistics
        </div>
<div className = "text-21">Upload Cover Page (optional)</div>
      <div className = "text-31">Choose file here <input type="file" className="input-box"/></div>


<div className="row-21">
  <div className="column">
    <label>Firm Name</label>
    <select className="input-box" placeholder="Firm Name">
      <option value="" disabled selected>Input</option>
      <option value="firm1">Firm 1</option>
      <option value="firm2">Firm 2</option>
      {/* Add more options as needed */}
    </select>
  </div>
  <div className="column">
  <label>Booking Contact Name</label>
    <input type="text" className="input-box" placeholder="Type here" />
  </div>
  <div className="column">
  <label>Phone Number (No spaces)</label>
    <input type="text" className="input-box" placeholder="Type here" />
  </div>
</div>


<div className="row-22">
  <div className="column">
  <label>Billing Address</label>
    <input type="text" className="input-box" placeholder="Type here" />
  </div>
  <div className="column">
  <label>Zip/Postal Code</label>
    <input type="text" className="input-box" placeholder="input" />
  </div>
  <div className="column">
  <label>Country/City</label>
    <input type="text" className="input-box" placeholder="Canada" />
  </div>
</div>



<div className="row-23">
    <div className="column">
    <label>Firm Name</label>
      <input type="text" className="input-box" placeholder="Firm Name" />
    </div>
    <div className="column">
    <label>Name of Represented Client</label>
      <input type="text" className="input-box" placeholder="Booking Contact Name" />
    </div>
  </div>


  <div className="row-24">
    <div className="column">
    <label>Firm Name</label>
      <input type="text" className="input-box" placeholder="Phone Number" />
    </div>
    <div className="column">
      <label className='kella'>kella</label>
      <input type="text" className="input-box" placeholder="Email Address" />
    </div>
  </div>
  <div className="row-25">
  <button className="plus">+</button>
    <div className="column">
      <input type="text" className="input-box" placeholder="Address" />
    </div>
    <div className="column">
      <input type="text" className="input-box" placeholder="City" />
    </div>
  </div>


        </>

        )}
     {currentPage > 1 && (
        <button className='party2' onClick={previousPage}>
          Previous
        </button>
      )}
        
        <button className='party1'  onClick={nextPage}>
    Next
  </button>

  </div>
    
  );
}

export default App;














