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

    function getTimeString(time: string) {
        let timeString = "";

        if (time) {
            const newTime = time.substring(6, 20);  // org: /Date(1709766000000)/
            const d = new Date(parseInt(newTime));  // 1709835354133
            timeString = d.toLocaleTimeString().substring(0, 5);  //  .substr(0, 5)
        }

        return timeString;
   }

    return (<>
        <section className="part-schedule" key={1}>
            { data.map( (prog, index) => {
                const image: string = prog.imageurl ? prog.imageurl : ""
                const title: string = prog.title ? prog.title : "-";
                const description: string = prog.description ? prog.description : "";

                const timeFrom: string = getTimeString(prog.starttimeutc);  // '00:00'; // prog.starttimeutc ? getTimeString(prog.starttimeutc + '000') : "";
                const timeUntil: string = getTimeString(prog.endtimeutc);   // prog.endtimeutc ? getTimeString(prog.endtimeutc + '000') : "";

                return (
                    <>
                    <article className="program-container" key={index}>
                        <div className="prog">
                            {/* <img src={image} alt="Program icon" /> */}
                            <div>
                                <div className="textbox title">{title} {index}</div>
                                <div className="textbox">{timeFrom} - {timeUntil}</div>
                            </div>
                        </div>
                        <div className="textbox description">{description}</div>

                    </article>
                    </>
                )
            }
             ) }
            
        </section>
    </>);
}