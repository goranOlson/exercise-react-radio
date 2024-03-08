import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Schedule } from "../components/Schedule";

import '../css/ChannelPage.css'

export function ChannelPage():JSX.Element {
    // const [view, setView] = useState('');  // schedule | programs

    const [channelData, setChannelData] = useState<object[]>([]);
    const [subPage, setSubPabe] = useState<string>('scheduel');

    const { channel } = useParams();
    // console.log('channel: ' + channel);

    useEffect(() => {  // id
        fetchChannelData();
    }, []);

    const fetchChannelData = async () => {
        const urlChannel = `https://api.sr.se/api/v2/channels/${channel}?format=json`;

        const response = await fetch(urlChannel);
        const data = await response.json();
        // console.log('data: ', data);

        setChannelData(data.channel);  // Skip copyright and 'channel'
    }

    // Rikskanal: 
    // https://api.sr.se/api/v2/channels/?filter=channeltype,filtervalue=Rikskanal&format=json 
    // viewClasses
    const image = channelData.image ? channelData.image : "";
    let name = channelData.name ? channelData.name : "";
    name += channelData.channeltype ? " - " + channelData.channeltype : "";
    const tagline = channelData.tagline ? channelData.tagline : "";

    


    return (<>
        <main className="channel-page">
            <header className="header">

                <div className="info">
                    <img className="image" src={image} alt="Channel image" />
                    <h2 className="title">{name}</h2>
                </div>
                <p className="description">{tagline}</p>
                <nav className="nav">
                    <span className="tab active">Tablå</span>
                    <span className="tab ">Program</span>
                </nav>
            </header>
            <Schedule />
        </main>
    </>);
}