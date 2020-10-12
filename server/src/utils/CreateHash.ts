/* eslint-disable import/prefer-default-export */
import { genSaltSync, hashSync } from 'bcryptjs';

export function createHash(password: string): string {
  const saltRounds = 10;
  const salt = genSaltSync(saltRounds);
  return hashSync(password, salt);
}
