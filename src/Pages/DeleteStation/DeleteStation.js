import React from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

const DeleteStation = () => {

    const {data: radios, isLoading, refetch} = useQuery('radios', () => fetch('http://localhost:5000/radionames', {
        method: 'GET',
    }).then(res=>res.json()));

    


    const handleDelete = id => {
        fetch(`http://localhost:5000/radiostation/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                toast.success(`Deleted Successfully`)
                refetch()
            }
        })
    }

    if(isLoading){
        return <Loading></Loading>
    }else{
        return (
            <div className='container mx-auto'>
                <div>
                <h2>All Radios: {radios.length}</h2>
                    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Radio's Name</th>
            <th>Radio's Frequency</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {
            radios.map((radio, index)=><tr key={radio._id}>
            <th>{index + 1}</th>
            <td>{radio.name}</td>
            <td>{radio.frequency}</td>
            <td>
        {
            <label onClick={() => handleDelete(radio._id)} className="btn btn-outline btn-warning"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></label>

          }
        </td>
            </tr>
          )
        }
        </tbody>
      </table>
    </div>
    </div>
    <ToastContainer></ToastContainer>
    </div>
        );
    }


    
};

export default DeleteStation;