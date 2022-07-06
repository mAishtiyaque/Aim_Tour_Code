import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { homePageImages } from "../../_helpers/beachdata";
import './dropdown.css'
//import Select from "react-select";

function DropDown(props){
    const navigate =useNavigate();
//   useEffect(() => {
//     // Run! Like go get some data from an API.
//   }, []);

  const countries = [ "India", "America", "Soudi Arab"];
  const states = [ "Goa", "Delhi", "Mumbai"];
  const locations=homePageImages;
  //const locations = [ {id: "goa0",title: 'Calangute Beach'}, {id: "goa1",title: 'Fort Aguada'}, {id: "goa2",title: 'Colva Beach'}];
  const [val, setVal]=useState({
    country:props.beachDetails.country,
    _state:props.beachDetails._state,
    location:props.beachDetails.title
  });
  const {country,_state,location}=val;
  function onChange(e){
        const {name,value}=e.target;
        setVal(state=>({
          ...state,[name]:value
        }));
        if(name==='location'){
            const selectedLocation =locations.filter((item)=>{return item.title===value })[0];
            navigate(`/beach/${selectedLocation.id}`)
        }
    }

    return(
            <div className="select-box">
                <select
                name='country'
                onChange={onChange}
                value={country} 
                disabled
                >
                {countries.map((option)=>(
                    <option key={option} value={option}>{option}</option>
                ))}
                </select>

                <select
                name='_state'
                onChange={onChange}
                value={_state}
                disabled
                >
                    {states.map((option)=>(
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>

                <select
                name='location'
                onChange={onChange}
                value={location}
                >
                    {locations.map((option)=>(
                        <option key={option.id} value={option.title}>{option.title}</option>
                    ))}
                </select>
      </div>

    );
}
export {DropDown}

