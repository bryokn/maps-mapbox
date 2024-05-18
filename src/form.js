import React from 'react';

const Form = () => {
  return (
    <form>
      <input name="address" placeholder="Address" type="text" />
      <input name="unit" placeholder="Unit Number" type="text" />
      <input name="city" placeholder="City" type="text" />
      <input name="state" placeholder="State" type="text" />
      <input name="country" placeholder="Country" type="text" />
      <input name="postcode" placeholder="Postcode" type="text" />
    </form>
  );
};

export default Form;