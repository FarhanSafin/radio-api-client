import { useEffect, useState } from "react";


const useRadios = () => {

    const [radios, setRadios] = useState([]);

    useEffect(()=>{
        fetch('https://radio-widget-t4.herokuapp.com/radionames')
        .then(res => res.json())
        .then(data => setRadios(data));
    }, []);

    return [radios, setRadios];
    
    }

export default useRadios;