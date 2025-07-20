import React from 'react';
import { FaChalkboardTeacher, FaUserGraduate, FaBook, FaCertificate } from 'react-icons/fa';
import './ServicesSection.css';

const services = [
  {
    icon: <FaChalkboardTeacher />,
    heading: 'Certified Teachers',
    description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    bg: 'service-blue',
    iconColor: '#193a7e'
  },
  {
    icon: <FaUserGraduate />,
    heading: 'Special Education',
    description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    bg: 'service-yellow',
    iconColor: '#b89a17'
  },
  {
    icon: <FaBook />,
    heading: 'Book & Library',
    description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    bg: 'service-purple',
    iconColor: '#6b42c8'
  },
  {
    icon: <FaCertificate />,
    heading: 'Certification',
    description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    bg: 'service-red',
    iconColor: '#df4343'
  },
];

export default function ServicesSection() {
  return (
    <section className="services-row">
      {services.map((service, idx) => (
        <div className={`service-card ${service.bg}`} key={idx}>
          <div className="service-icon-circle">
            {React.cloneElement(service.icon, { size: 60, color: service.iconColor })}
          </div>
          <h3>{service.heading}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </section>
  );
}