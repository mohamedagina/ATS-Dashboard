export type Candidate = {
  id: `${string}-${string}-${string}-${string}-${string}`;
  name: string;
  location: string;
  education: string;
  hashTags: string[];
  tags: string[];
  stage: string;
};
