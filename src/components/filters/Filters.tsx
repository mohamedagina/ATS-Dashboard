import { Checkbox, Collapse, CollapseProps, Input, Tooltip } from 'antd';
import { GoInfo, GoSearch } from 'react-icons/go';
import './Filters.css';
import { PiNotebook } from 'react-icons/pi';
import { useCandidatesContext } from '../../hooks';
import { SharedObj } from '../../context/candidates-context';
import { useEffect, useState } from 'react';

const candidateFilters = [
  {
    label: 'Personal Information',
    options: ['option 1', 'option 2', 'options 3']
  },
  { label: 'Education', options: ['option 1', 'option 2', 'options 3'] },
  { label: 'Work Experience', options: ['option 1', 'option 2', 'options 3'] },
  { label: 'Activity Filter', options: ['option 1', 'option 2', 'options 3'] }
];

export const Filters = () => {
  const [searchInput, setSearchInput] = useState('');

  const { searchQuery } = useCandidatesContext() as SharedObj;

  const filters: CollapseProps['items'] = [
    {
      key: '6',
      label: (
        <span className="filters-header medium">
          Filters
          <span className="thin">0 Selected</span>
        </span>
      ),
      collapsible: 'disabled',
      showArrow: false
    },
    ...candidateFilters.map((filter, i) => ({
      key: i,
      label: (
        <span className="filter-header">
          <span className="lg center">
            <PiNotebook />
          </span>{' '}
          {filter.label}
        </span>
      ),
      children: (
        <Checkbox.Group
          options={filter.options}
          style={{ flexDirection: 'column', gap: '1rem' }}
        />
      )
    })),
    {
      key: '5',
      label: (
        <span className="filter-header">
          <span className="lg center">
            <PiNotebook />
          </span>{' '}
          Advanced Filter
        </span>
      ),
      collapsible: 'disabled',
      showArrow: false
    }
  ];

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      searchQuery(searchInput);
    }, 200);

    return () => clearTimeout(timeoutID);
  }, [searchInput, searchQuery]);

  return (
    <div className="filters">
      <Input
        placeholder="Serach by name, edu, exp or #tag"
        style={{ padding: '0.5rem 1rem' }}
        onChange={e => {
          setSearchInput(e.target.value);
        }}
        value={searchInput}
        prefix={<GoSearch style={{ color: '#B0BABF' }} />}
        suffix={
          <Tooltip title="filter candidates">
            <GoInfo style={{ color: '#B0BABF' }} />
          </Tooltip>
        }
      />

      <Collapse items={filters} expandIconPosition="end" />
    </div>
  );
};
