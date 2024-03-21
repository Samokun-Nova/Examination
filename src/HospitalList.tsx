import React, { useState } from 'react';
// import './Hospital.css';

interface Hospital {
  id: number;
  name: string;
  specialist: string; 
  address: string;
  contact: string;
}
interface AddHospitalProps {
  onAddHospital: (newHospital: Hospital) => void;
}
const AddHospital: React.FC<AddHospitalProps> = ({ onAddHospital }) => {
  const [newHospital, setNewHospital] = useState<Hospital>({
    id: 0,
    name: '',
    specialist: '', 
    address: '',
    contact: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setNewHospital((prevHospital) => ({
      ...prevHospital,
      [name]: value,
    }));
  };
  const handleAddHospital = () => {
    const id = Date.now();
    const hospitalToAdd: Hospital = { ...newHospital, id };

    onAddHospital(hospitalToAdd);

    setNewHospital({
      id: 0,
      name: '',
      specialist: '', 
      address: '',
      contact: '',
    });
  };

  return (
    <div>
      <h2 className='hospital-header'>Add a New Hospital</h2>
      <form className='add-hospital-box' onSubmit={(e) => { e.preventDefault(); handleAddHospital(); }}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            className='add-input'
            value={newHospital.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Specialist:
          <input
            type="text"
            name="specialist" 
            className='add-input'
            value={newHospital.specialist} 
            onChange={handleInputChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            className='add-input'
            value={newHospital.address}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Contact:
          <input
            type="text"
            name="contact"
            className='add-input'
            value={newHospital.contact}
            onChange={handleInputChange}
          />
        </label>

        <button type="submit">
          Add Hospital
        </button>
      </form>
    </div>
  );
};

interface HospitalProps {
  hospital: Hospital;
}

const HospitalCard: React.FC<HospitalProps> = ({ hospital }) => {
  return (
    <div className='hospital-box'>
      <h3 className='hospital-name'>{hospital.name}</h3>
      <p>
        <strong className='hospital-specialist'>Specialist:</strong> {hospital.specialist}
      </p>
      <p>
        <strong className='hospital-address'>Address:</strong> {hospital.address}
      </p>
      <p>
        <strong className='hospital-contact'>Contact:</strong> {hospital.contact}
      </p>
    </div>
  );
};

const HospitalsList: React.FC = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>([
    {
      id: 1,
      name: 'City Hospital',
      specialist: 'Downtown', 
      address: '123 Main Street',
      contact: '555-1234',
    },
  ]);

  const handleAddHospital = (newHospital: Hospital) => {
    setHospitals((prevHospitals) => [...prevHospitals, newHospital]);
  };

  return (
    <div>
      <h2>Hospitals</h2>
      <div className='hospitals-container'>
        {hospitals.map((hospital) => (
          <HospitalCard key={hospital.id} hospital={hospital} />
        ))}
      </div>

      <AddHospital onAddHospital={handleAddHospital} />
    </div>
  );
};

export default HospitalsList;
