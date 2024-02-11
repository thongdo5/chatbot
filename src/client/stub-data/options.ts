import { generateId } from '@utils/generateId';

const optionName = 'option';

export enum OPTION {
  A = 'Option A',
  B = 'Option B',
  C = 'Option C',
  D = 'Option D',
}

export interface OptionInterface {
  id: string;
  name: string;
  label: string;
}

export const options: OptionInterface[] = [
  {
    id: generateId(),
    name: optionName,
    label: OPTION.A,
  },
  {
    id: generateId(),
    name: optionName,
    label: OPTION.B,
  },
  {
    id: generateId(),
    name: optionName,
    label: OPTION.C,
  },
  {
    id: generateId(),
    name: optionName,
    label: OPTION.D,
  },
];
