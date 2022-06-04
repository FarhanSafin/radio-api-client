import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import { useNavigate } from 'react-router-dom';

const UpdateStation = () => {const {data: radios, isLoading} = useQuery('radios', () => fetch('http://localhost:5000/radionames', {
    method: 'GET',
}).then(res=>res.json()));

const navigate = useNavigate();

const showRadioDetail = id => {
    const path = `/updateradio/${id}`;
    navigate(path);
}

if(isLoading){
    return <Loading></Loading>
}else{
    return (
        <div className='container mx-auto'>
            <div>
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
        <label onClick={() => showRadioDetail(radio._id)} className="btn btn-outline btn-info"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
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
</div>
    );
}

};

export default UpdateStation;