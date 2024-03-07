import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import '../css/Schedule.css'


//               chedule
export function Schedule(): JSX.Element {
    const { channel } = useParams();
    
    const [data, setData] = useState([]);

    const fetchData = async () => {
        // Fetch all 
        //const url = `https://api.sr.se/v2/scheduledepisodes?channelid=${channel}&pagination=false&format=json`;  // All
        const url = `https://api.sr.se/v2/scheduledepisodes?channelid=${channel}&format=json`;
        // console.log('url: ' + url);

        const response = await fetch(url);
        const data = await response.json();

        setData(data.schedule);  // Skip copyright
    } 
    

   useEffect(() => {
    fetchData();
   }, []);

   // {links.map(link => (<Link className={link.className} activeClassName={link.activeClassName} to={link.to}>{link.name}</Link> ))}

   // starttimeutc: /Date(1709766000000)/
    function getTimeString(time: string) {
        let timeString = "";

        if (time) {
            const value = time.substring(6, time.length - 2);

            // timeString = value;
            const d = new Date(value);
            timeString = d.getHours() + ":" + d.getMinutes();
            // console.log(timeString);
        }

        return timeString;
   }
   function getTime(time: string) {
        return "01:00";
    }

    return (

        
        <section className="part-schedule">
            Scheduel... {data.length}
            return (
            { data.map( (prog) => {
                const image = prog.imageurl ? prog.imageurl : ""
                const title = prog.title ? prog.title : "-";
                const description = prog.description ? prog.description : "";

                
                // starttimeutc: /Date(1709766000000)/
                // const tFrom = prog.starttimeutc ? new Date() : ""
                console.log('time: ' + getTimeString(prog.starttimeutc));
                console.log('time2: ' + getTime());

                return (
                    <div className="program-container" key={prog.id}>
                        <div className="prog">
                            <img src={image} alt="Program icon" />
                            <div>
                                <div className="textbox title">{title}</div>
                                <div>00:00 - 00:30</div>
                            </div>
                        </div>
                        <div className="textbox description">{description}</div>

                    </div>
                )
            } ) }
            )
        </section>
        
        
    );
}