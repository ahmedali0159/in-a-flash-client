import React from 'react'
import { useState, useEffect } from 'react'
import ServicesInfo from './ServicesInfo'

export default function Services() {
    const [service, setService] = useState([])

    
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    return (
        <div className="services-container mt-5">
            
        <div className="text-center">
            <h5 className="text-secondary">OUR SERVICES</h5>
            <h1 className="text-color">What We Offer Services</h1>
        </div>
        <div className="row">
                {
                    service.map(sv => <ServicesInfo sv={sv}></ServicesInfo>)
                }
          </div>
     </div>
    )
}
