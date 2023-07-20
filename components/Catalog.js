import React from "react";
import Link from "next/link";
import dynamic from 'next/dynamic';

const cardStyle = { display: "flex", width: "220px", border: "1px solid gray", flexDirection: "column", alignItems: "center" }

export const Catalog = () => {
    const [list, setList] = React.useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json();
            setList(data);
        } catch (err) {
            console.error(err)
        }
    }

    React.useEffect(() => {
        fetchData()
    }, [])

    return <div>
        <div style={{border: '1px solid black'}}>
        <h3>Child App 2 Catalog (PORT 3002)</h3>
        <div style={{display: "flex", width: "750px", gap: "20px", flexWrap: "wrap", marginTop: "25px" }}>
            {list.map(d => {
                return (
                    <div key={d.id} style={cardStyle}>
                        <p>{d.username}</p>
                        <p>{d.name}</p>
                    </div>
                )
            })}
        </div>
        </div>
    </div>
}
export default Catalog;