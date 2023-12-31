import { useEffect, useState } from "react";
import DetailCard from "./DetailCard";


const Collage = () => {
    const [collages, setCollages] = useState([])

    useEffect(() => {
        fetch('https://collage-management-application-server-mahdiwebx-gmailcom.vercel.app/collages')
        .then(res => res.json())
        .then(data => setCollages(data))
    })

    return (
        <div>
            {
                collages.map(collage => <DetailCard
                key={collage.id}
                collage={collage}
                ></DetailCard>)
            }
        </div>
    );
};

export default Collage;