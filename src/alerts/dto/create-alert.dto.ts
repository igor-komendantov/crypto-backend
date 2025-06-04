export class CreateAlertDto {
  readonly type: 'email' | 'telegram' | 'push' | 'discord' | 'slack';
  readonly recipient: string; // email, telegram ID и т.д.
  readonly message: string;
}
