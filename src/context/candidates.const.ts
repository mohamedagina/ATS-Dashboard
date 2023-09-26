import { Candidate } from '../models';

export const candidates: Candidate[] = [
  {
    id: crypto.randomUUID(),
    name: 'Mohamed Agina',
    location: 'Mansoura, Egypt',
    education: 'Bachelor - Mansoura University (2016 - 2021)',
    hashTags: ['#top_candidate', '#your_best_choice'],
    tags: ['Frontend', 'Egypt', 'Reactjs'],
    stage: 'Shortlisted'
  },
  {
    id: crypto.randomUUID(),
    name: 'Not Mohamed Agina',
    location: 'Disneyland, US',
    education: 'Bachelor - MIT (2023 - 2023)',
    hashTags: ['#bad_candidate', '#not_recommended'],
    tags: ['Frontend', 'USA', 'Reactjs'],
    stage: 'Withdrawn'
  },
  {
    id: crypto.randomUUID(),
    name: 'Aaliyah Sanderson',
    location: 'Riyadh, Saudi Arabia',
    education: 'Bachelor - Cambridge University (2023 - 2023)',
    hashTags: ['#bad_candidate', '#not_recommended'],
    tags: ['Frontend', 'Saudi', 'Reactjs'],
    stage: 'Withdrawn'
  },
  {
    id: crypto.randomUUID(),
    name: 'John Doe',
    location: 'Bostom, USA',
    education: 'Bachelor - MIT (2023 - 2023)',
    hashTags: ['#bad_candidate', '#not_recommended'],
    tags: ['New York', 'Marketing', 'London'],
    stage: 'Withdrawn'
  },
  {
    id: crypto.randomUUID(),
    name: 'Thomas Matt',
    location: 'Edinburgh, UK',
    education: 'Bachelor - Harvard University (2023 - 2023)',
    hashTags: ['#bad_candidate', '#not_recommended'],
    tags: ['New York', 'Marketing', 'London'],
    stage: 'Withdrawn'
  },
  {
    id: crypto.randomUUID(),
    name: 'Kamilia Smith',
    location: 'London, UK',
    education: 'Bachelor - Boston University (2023 - 2023)',
    hashTags: ['#bad_candidate', '#not_recommended'],
    tags: ['New York', 'Marketing', 'London'],
    stage: 'Withdrawn'
  },
  {
    id: crypto.randomUUID(),
    name: 'Roy Jade',
    location: 'Cambridge,  UK',
    education: 'Bachelor - Yale (2023 - 2023)',
    hashTags: ['#bad_candidate', '#not_recommended'],
    tags: ['New York', 'Marketing', 'London'],
    stage: 'Withdrawn'
  },
  {
    id: crypto.randomUUID(),
    name: 'Ahmed Salman',
    location: 'New York, USA',
    education: 'Bachelor - Cambridge University (2023 - 2023)',
    hashTags: ['#bad_candidate', '#not_recommended'],
    tags: ['New York', 'Marketing', 'London'],
    stage: 'Withdrawn'
  },
  {
    id: crypto.randomUUID(),
    name: 'John Fayez',
    location: 'Edinburgh, UK',
    education: 'Bachelor - Harvard University (2023 - 2023)',
    hashTags: ['#bad_candidate', '#not_recommended'],
    tags: ['New York', 'Marketing', 'London'],
    stage: 'Withdrawn'
  }
];
