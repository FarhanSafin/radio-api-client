import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateForm = () => {
    const [radio, setRadio] = useState({});
    const { register,  handleSubmit } = useForm();
    const {radioId} = useParams();
    const navigate = useNavigate();

    useEffect(() => 
    {const url = `https://radio-widget-t4.herokuapp.com/updateradio/${radioId}`;
      fetch(url , {
        method: 'GET'
    })
      .then(res => res.json())
      .then(data => setRadio(data));},[radioId]);

    const handleUpdate = event => {
      const updateData =
      {
        name: event.name,
        frequency: event.frequency
      }
      
      fetch(`https://radio-widget-t4.herokuapp.com/updateradio/${radio._id}`,{
        method: 'PUT',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(updateData)
      })
      .then(res => res.json())
      .then(data => {
        const path = `/home`;
        navigate(path);
      })}
      
      return (
        <div className='text-center mt-52'>
            <h2>Selected Radio's Info: </h2>
            <h2>Current ID: {radio._id}</h2>
            <h2>Current Name: {radio.name}</h2>
            <h2>Current Frequency: {radio.frequency}</h2>

            <form className='text-center mx-5' onSubmit={handleSubmit(handleUpdate)}>
              <div className="form-control w-full max-w-xs md:mx-96">
                <label className="label">
                  <span className="label-text md:mx-96 mt-10">Name</span>
                </label>
                <input type="text" placeholder="Please write the radio's updated name" className="input input-bordered w-full max-w-xs md:mx-96" required {...register("name")}/>
              </div>

              <div className="form-control w-full max-w-xs md:mx-96">
                <label className="label">
                  <span className="label-text md:mx-96 mt-10">Frequency</span>
                </label>
                <input type="number" step=".1" placeholder="Please write the radio's updated frequency" className="input input-bordered w-full max-w-xs md:mx-96" required {...register("frequency")}/>
              </div>
              <input className='btn w-half max-w-xs mt-5' type="submit" value="Update" />
            </form>
      </div>
    );
};

export default UpdateForm;