import * as bcrypt from 'bcrypt';

export default class Encryptjs {
  static async encrypt(data: string) {
    return bcrypt.hash(data, 10);
  }

  static async verify(data: string, encrypted: string) {
    return bcrypt.compareSync(data, encrypted);
  }
}
