import { Algorithm, Secret, SignOptions } from 'jsonwebtoken';
import { readFileSync } from 'fs';

const JWT_SECRET: Secret = readFileSync('jwt.evaluation.key', 'utf8');

const JWT_OPTIONS = {
  algorithm: <Algorithm> 'HS256',
  expiresIn: '15m',
};

class JwtConfig {
  constructor(readonly secret: string, readonly options: SignOptions) { }
}

const jwtConfig = new JwtConfig(JWT_SECRET, JWT_OPTIONS);

export default jwtConfig;
