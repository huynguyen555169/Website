import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';

function HinhAnh() {

    const [albumm, setAlbum] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`https://www.breakingbadapi.com/api/characters`)
            console.log(result.data)
            setAlbum(result.data)
        }
        fetchData()
    }, [])

    const elements = albumm.map((item, index) => {
        return <div className="row__card">
            <img src={item.img} alt='card' />
        </div>
    })
    return (
        <div>
            <div className="container__hinhanh">
                <div className="container">
                    <section className="row">
                        {elements}
                    </section>
                </div>
            </div>
        </div>
    );
}

export default HinhAnh;