import React from 'react';

const PopupForm = ({ formData, onChange, onSubmit, onClose }) => {
  return (
    <div className="form-popup">
      <form onSubmit={onSubmit}>
        <label htmlFor="attribute_1">1:</label>
        <input
          type="text"
          id="attribute_1"
          name="attribute_1"
          value={formData.attribute_1}
          onChange={onChange}
        />
        <br />
        <label htmlFor="attribute_2">2:</label>
        <input
          type="text"
          id="attribute_2"
          name="attribute_2"
          value={formData.field2}
          onChange={onChange}
        />
        <br />

        <label htmlFor="attribute_3">3:</label>
        <input
          type="text"
          id="attribute_3"
          name="attribute_3"
          value={formData.field3}
          onChange={onChange}
        />
        <br />

        <label htmlFor="attribute_4">4:</label>
        <input
          type="text"
          id="attribute_4"
          name="attribute_4"
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
