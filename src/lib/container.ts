import upperFirst from 'lodash/upperFirst';

export type Colour =
  'grey' |
  'black' |
  'greyLight' |
  'blue' |
  'blueDark' |
  'blueLight' |
  'green' |
  'greenDark' |
  'greenLight' |
  'cream' |
  'yellow' |
  'white' |
  'red' |
  'brown' |
  'orange' |
  'pink' |
  'maroon' |
  'purple' |
  'transparent';

export interface Container {
  id?: number;
  name?: string;
  displayName?: string;
  bodyColour?: string;
  lidColour?: string;
  frequency?: { id: number; name: string; };
  materials?: { id: number; name?: string; }[];
  cost?: number;
  [index: string]: any;
}

export const colourOptions: { value: string; name: Colour, label: string; }[] = [
  { value: '#2d9cdb', name: 'blue', label: 'Blue' },
  { value: '#2262b9', name: 'blueDark', label: 'Dark blue' },
  { value: '#56ccf2', name: 'blueLight', label: 'Light blue' },
  { value: '#828282', name: 'grey', label: 'Grey' },
  { value: '#4f4f4f', name: 'black', label: 'Black' },
  { value: '#bdbdbd', name: 'greyLight', label: 'Light grey' },
  { value: '#3cb848', name: 'green', label: 'Green' },
  { value: '#219653', name: 'greenDark', label: 'Dark green' },
  { value: '#6fcf97', name: 'greenLight', label: 'Light green' },
  { value: '#e1d9c0', name: 'cream', label: 'Cream' },
  { value: '#f2c94c', name: 'yellow', label: 'Yellow' },
  { value: '#f4f7f9', name: 'white', label: 'White' },
  { value: '#f24545', name: 'red', label: 'Red' },
  { value: '#ad7849', name: 'brown', label: 'Brown' },
  { value: '#f2994a', name: 'orange', label: 'Orange' },
  { value: '#ff649e', name: 'pink', label: 'Pink' },
  { value: '#a62f5a', name: 'maroon', label: 'Maroon' },
  { value: '#9946db', name: 'purple', label: 'Purple' },
  { value: '#ffffff00', name: 'transparent', label: 'Transparent' },
];

export const containersWithLid = [
  'kitchen caddy',
  'kerbside caddy',
  'wheeled bin',
  'box',
  'communal wheeled bin',
];

export const containersWithTransparentColour = [
  'householder provided carrier bag',
  'non-reusable sack',
  'reusable sack',
];

export const containerHasLid = (containerName: string): boolean => (
  containersWithLid.includes(containerName.toLowerCase())
);

export const containerHasTransparentColour = (containerName: string): boolean => (
  containersWithTransparentColour.includes(containerName.toLowerCase())
);

export const getColourName = (colour: string) => {
  if (colour === 'no-lid') {
    return colour;
  }

  return colourOptions.find((option) => option.value === colour)?.name;
};

export const getColourOptions = (containerName) => {
  if (containerHasTransparentColour(containerName)) {
    return colourOptions;
  }

  return colourOptions.filter((option) => (
    option.name !== 'transparent'
  ));
};

export function uniqueContainerName(
  {
    displayName,
    bodyColour,
    lidColour,
    frequency,
  }: Container,
  showFrequency = false,
) {
  const bodyColourName = upperFirst(getColourName(bodyColour as string));
  const frequencyName = showFrequency ? ` ‒ ${frequency?.name}` : '';
  let colourName = '';

  if (bodyColourName && (!lidColour || bodyColour === lidColour)) {
    colourName = ` ‒ ${bodyColourName}`;
  } else if (bodyColourName) {
    const lidColourName = upperFirst(getColourName(lidColour as string));
    colourName = ` ‒ ${bodyColourName}/${lidColourName}`;
  }

  return `${displayName}${colourName}${frequencyName}`;
}
