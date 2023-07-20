import React from 'react'
import Select from 'react-select'

export default function SortSelect() {
    const options = [
        { value: 'default', label: 'Default' },
        { value: 'price_high_to_low', label: 'Price: High to Low' },
        { value: 'price_low_to_high', label: 'Price: Low to High' },
      ];
      const changeHandler = () => {
        
      };
      const customStyles = {
        container: (provided:any) => ({
          ...provided,
          fontSize: '14px',
        }),
        control: (provided:any) => ({
          ...provided,
          width: '180px',
          border: '1px #ddd solid',
          boxShadow: 'none',
          '&:hover': {},
        }),
        indicatorSeparator: (provided:any) => ({
          ...provided,
          display: 'none',
        }),
        menu: (provided:any) => ({
          ...provided,
          border: '1px #ddd solid',
          boxShadow: '0 0 5px rgba(0, 0, 0, 0.05)',
        }),
        option: (provided:any, state:any) => ({
          ...provided,
          border: 'none',
          backgroundColor: state.isSelected ? '#4a00e0' : 'white',
          cursor: 'pointer',
          ':active': {
            ...provided[':active'],
            backgroundColor: state.isSelected ? '#4a00e0' : '#f4f4f4',
          },
        }),
        placeholder: (provided:any) => ({
          ...provided,
          color: '#bbb',
        }),
      };
  return (
    <Select
      blurInputOnSelect
      defaultValue={options[0]}
      instanceId="sort-select"
      isSearchable={false}
      onChange={changeHandler}
      options={options}
      placeholder="Sort by"
      styles={customStyles}
    />
  )
}
