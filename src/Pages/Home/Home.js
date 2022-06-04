import React from 'react';
import useRadios from '../../hooks/useRadios';
import Loading from '../Shared/Loading/Loading'

const Home = () => {
    const [radios] = useRadios();


    if(radios.length === 0){
      return <Loading></Loading>
    }else{
      return (
        <div className='container mx-auto text-center'>
            <h2 className='mt-20'>Available Radios: {radios.length}</h2>
            <div className="overflow-x-auto">
            <table className="table w-full mt-52">
    <thead>
      <tr>
        <th></th>
        <th>Radio Station's Name</th>
        <th>Radio Station's Frequency</th>
      </tr>
    </thead>
    <tbody>
    {
        radios.map((radio, index)=>      <tr key={radio._id}>
        <th>{index+1}</th>
        <td>{radio.name}</td>
        <td>{radio.frequency}</td>
      </tr>)
    }
    </tbody>
  </table>
  </div>
        </div>
    );
    }



    
};

export default Home;