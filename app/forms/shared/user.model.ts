import { Theme } from './theme.model';

export class User {
  name: string;
  age?: number;
  gender?: string;
  role?: string;
  theme?: Theme;
  topics?: string[];
  isActive?: boolean;
  toggle?: string;
}