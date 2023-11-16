import { ReactElement, useState } from "react";
import { data } from "./types";
import './twitter.css';

export default function twitter(userData: data){
    const {children,username = 'pedro', name, initialIsFollowing = false} = userData;
    

    const formatUsername = (format: string) => `@${format}`;
    const [follow, setfollow] = useState(initialIsFollowing);
    const followThing = follow ? 'Siguiendo' : 'Seguir';

    return (
        <>
        <section>
        <header>
            <figure>
                <img src={`https://unavatar.io/${username}`} alt="" />
            </figure>
            <div className="dataUser">
                <h5>{name}</h5>
                <p>{formatUsername(username)}</p>
                
            </div>
                <button onMouseLeave={()=> setfollow(true)} onMouseOver={()=> setfollow(false)} className={follow ? 'follow' : 'follu'}>
                    {followThing}
                </button>
        </header>
        </section>
        </>
    )
}