import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddStation = () => {
    const { register,  handleSubmit } = useForm();

    const handleRadio = async event => 
    {
        toast.info('Please Wait', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          })
      const radio =
      {
        name: event.name,
        frequency: event.frequency
      }

      fetch(`https://radio-service.onrender.com/addradio`,
      {
        method: 'POST',
        headers:
        {
          'content-type': 'application/json',
        },
          body: JSON.stringify(radio)
      })
      .then(res => res.json())
      .then(data => toast.success('Radio Station Added successfully', 
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }))
  }
  
  return (
    <div>
      <div>
        <h2 className='text-center text-3xl text-primary mt-36 mb-36'>Add a Radio Station using the form below</h2>
        <form className='text-center md:mx-48 mx-10' onSubmit={handleSubmit(handleRadio)}>

        <div className="form-control w-full max-w-xs md:mx-80">
          <label className="label">
            <span className="label-text md:mx-96 md:px-8">Name</span>
          </label>
          <input type="text" placeholder="Please write the radio's name" className="input input-bordered w-full max-w-xs md:mx-72" required {...register("name")}/>
        </div>

        <div className="form-control w-full max-w-xs md:mx-80">
          <label className="label">
            <span className="label-text md:mx-96 md:px-5 mt-10">Frequency</span>
          </label>
          <input type="number" step=".1" placeholder="Please write the radio's frequency" className="input input-bordered w-full max-w-xs md:mx-72" required {...register("frequency")}/>
        </div>
        
        <input className='btn w-half max-w-xs mt-5' type="submit" value="Add Radio Station" />

        </form>

        <ToastContainer />

        </div>
      </div>
    );
};

export default AddStation;