import gif from './gif.png';
import person from './woman.png';
import notfound from './404-error.png';
import verfied from './verifiedg.png';
import normal from './verify.png';
import React from 'react'
//images

//

const Card = (props) =>{
    return(
        <>
        <div className='cardGif'>
            <p className='trendlogo'><img src={gif} alt="trend"/>GIFs</p>
            <div className='poster'>
                {props.gifdata.length>0 ?(
                    props.gifdata.map((gif,idx) =>{
                        return(
                            <div key={idx} className="cardItem">
                            <img className="gifimage" src={gif.images.original.url} alt='gif'/>
                            <div className='profileSec'>
                                <img src={gif.user?(gif.user.avatar_url):(person)} alt="profile"/>
                                <span>
                                    <div className='varifiedUser'>
                                        <p>@{gif.user?(gif.user.username):('NoUsername')}</p>
                                        <img src={gif.user?(gif.user.is_verified===true?(verfied):(normal)):(normal)} alt="verified"/>
                                    </div>
                                </span>
                            </div>
                            </div>
                        )
                    })):(
                        <img className='notFound' src={notfound} alt='notfound'/>
                    )
                }
            </div>
        </div>
        </>
    )
}
export default Card;