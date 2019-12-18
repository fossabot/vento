import React from "react";

import useForm from 'react-hook-form';

const App = () => {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input name="firstname" ref={register} /> {/* register an input */}
      </div>

      <div>
        <label htmlFor="lastname">Last Name</label>
        <input name="lastname" ref={register({ required: true })} />
        <span className="error">{errors.lastname && 'Last name is required.'}</span>
      </div>
      
      <div>
        <label htmlFor="age">Age</label>
        <input name="age" ref={register({ pattern: /\d+/ })} />
        <span className="error">{errors.age && 'Please enter number for age.'}</span>
      </div>
      
      <input type="submit" />
    </form>
  );
};
export default App;

