import React, { useEffect, useState } from 'react'

export const Message = () => {
    const [coords, setCoords] = useState({x : 0 , y: 0 });
    const{ x, y} = coords;

    useEffect(() => {

        const mousevome =(e)=>{
            const coors ={x: e.x , y :e.y }
            // console.log(" :D ");
            setCoords( coors );
        }
        // console.log("componente montadp");
        window.addEventListener('mousemove',mousevome)
        return () => {
            window.removeEventListener('mousemove',mousevome);
            // console.log("componente desmontadp");
        }
    }, [])
    return (
        <>
            <h1>Eres genial!</h1>
            <hr/>
            <p>
                x:{ x } , y :{ y };
            </p>
        </>
    )
}
