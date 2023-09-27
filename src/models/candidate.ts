export type UUID = `${string}-${string}-${string}-${string}-${string}`;
export type Candidate = {
  id: UUID;
  name: string;
  location: string;
  education: string;
  hashTags: string[];
  tags: string[];
  stage: string;
};

export type Stage = {
  title: string;
  candidates: number;
};
