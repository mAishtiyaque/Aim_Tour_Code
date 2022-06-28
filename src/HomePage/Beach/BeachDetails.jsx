//import { useNavigate } from 'react-router-dom';
//let user = JSON.parse(localStorage.getItem('user'));
import './beachdetails.css'
import {beachDetailsImages}  from '../../_helpers/beachdata';
import { useParams } from 'react-router-dom';
import {DropDown} from './DropDown'
function BeachDetails() {
    const param=useParams();
    const itemDetails =beachDetailsImages.filter((item)=>{return item.id===param.id })[0];
    return (
        <div>
            <DropDown itemDetails={itemDetails}/>
            <div className="beachdetails">
                <h3 className="beach_title">{itemDetails.title}</h3>
                <div className="beach_imgs">
                    {itemDetails.imgs.map((item) => (
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
                    <p className="beach_text">{itemDetails.text}</p>
                    <div>
                        <iframe src={itemDetails.location} title={itemDetails.id} frameBorder="2">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { BeachDetails };