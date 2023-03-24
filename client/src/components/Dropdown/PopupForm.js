import React from 'react';

const PopupForm = ({ formData, onChange, onSubmit, onClose }) => {
  return (
    <div className="form-popup">
      <form onSubmit={onSubmit}>
        <label htmlFor="field1">1:</label>
        <input
          type="text"
          id="field1"
          name="field1"
          value={formData.field1}
          onChange={onChange}
        />
        <br />
        <label htmlFor="field2">2:</label>
        <input
          type="text"
          id="field2"
          name="field2"
          value={formData.field2}
          onChange={onChange}
        />
        <br />

        <label htmlFor="field3">3:</label>
        <input
          type="text"
          id="field3"
          name="field3"
          value={formData.field3}
          onChange={onChange}
        />
        <br />

        <label htmlFor="field4">4:</label>
        <input
          type="text"
          id="field4"
          name="field4"
          value={formData.field4}
          onChange={onChange}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default PopupForm;
