// JobConfigForm.js
import React from 'react';

function JobConfigForm({ userCriteria, setUserCriteria }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserCriteria((prevCriteria) => ({ ...prevCriteria, [name]: value }));
  };

  return (
    <form>
      <label>
        Location:
        <input type="text" name="location" value={userCriteria.location} onChange={handleInputChange} />
      </label>
      {/* Similar inputs for techStack, jobTitle, and yearsOfExperience */}
      <button type="submit">Save</button>
    </form>
  );
}

export default JobConfigForm;
