import { Role } from '../../generated/prisma/enums';

export class SignupDto {
  name: string;
  email: string;
  password: string;
  role?: Role; // opcional
}
