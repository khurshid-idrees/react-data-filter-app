import { useState } from 'react';

const FilterBar = ({
  genders,
  onNameFilter,
  onEmailFilter,
  onGenderFilter,
  onDateFilter,
}) => {
  const [filters, setFilters] = useState({
    name: '',
    email: '',
    gender: '',
    from: '',
    to: '',
  });
  // console.log(genders);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleInput = (field) => (e) => {
    const { value } = e.target;

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case 'name':
        setName(value);
        onNameFilter(value);
        break;

      case 'email':
        onEmailFilter(value);
        // setEmail(value);
        break;
      case 'gender':
        // setGender(value);
        onGenderFilter(value);
        break;
      case 'from':
        onDateFilter(value, 'from');
        // setFrom(value);
        break;
      case 'to':
        // setTo(value);
        break;

      default:
        break;
    }
  };

  return (
    <div className="row my-5">
      <div className="col">
        <h4 className="border-bottom">Filters</h4>
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={filters.name}
          onChange={handleInput('name')}
        />
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="form-control"
          id="email"
          onChange={handleInput('email')}
        />
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="gender">Gender</label>
        <select
          className="form-control"
          id="gender"
          gender={gender}
          onChange={handleInput('gender')}
        >
          <option value="" hidden>
            Select
          </option>
          {genders.map((gender) => (
            <option value={gender} key={gender}>
              {gender}
            </option>
          ))}
        </select>
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="startDate">From</label>
        <input
          type="date"
          className="form-control"
          id="startDate"
          onChange={handleInput('from')}
        />
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="endDate">To</label>
        <input
          type="date"
          className="form-control"
          id="endDate"
          onChange={handleInput('to')}
        />
      </div>
    </div>
  );
};

export default FilterBar;
