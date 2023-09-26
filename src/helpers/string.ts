export const getImagePlaceholder = (name: string): string =>
  name
    .trim()
    .match(/(^\w)|(?<=\s)(\w)(?=\w+$)/g)
    ?.join('')
    .toLocaleUpperCase() || 'NA';
