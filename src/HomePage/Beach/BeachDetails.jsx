
import './beachdetails.css'
import {beachsData}  from '../../_helpers/beachdata';
import { useParams } from 'react-router-dom';
import {DropDown} from './DropDown'
import Weather from './Weather';
function BeachDetails() {
    const param=useParams();
    const beachDetails =beachsData.filter((item)=>{return item.id===param.id })[0];
    
    return (
        <div>
            <DropDown beachDetails={beachDetails}/>
            <div className="beachdetails">
                <div className="title_weather_box" style={{ display:"flex"}}>
                    <h3 className="beach_title">{beachDetails.title}</h3>
                    <Weather beachDetails={beachDetails}/>
                </div>
                <div className="beach_imgs">
                    {beachDetails.imgs.map((item) => (
                        <li key={item.img}>
                            <img
                                src={`${item.img}`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </li>
                    ))}
                </div>
                <div className='beach_text_map'>
                    <p className="beach_text">{beachDetails.text}</p>
                    <div>
                        <iframe src={beachDetails.location} title={beachDetails.id} frameBorder="2">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { BeachDetails };