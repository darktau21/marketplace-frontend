export type RegisterDto = {
  email: string;
  name: string;
  password: string;
  surname: string;
};

export type LoginDto = {
  email: string;
  password: string;
};

export type EditDto = Partial<{
  birthday: string;
  email: string;
  name: string;
  phone: string;
  role: string;
  state_number: number;
  surname: string;
}>;
