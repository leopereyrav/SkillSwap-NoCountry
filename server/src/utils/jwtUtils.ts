import * as jwt from 'jsonwebtoken';
import { TokenPayload } from '../interfaces/tokenPayload.interface';

class JWTUtils {
  private readonly secret: string;

  constructor() {
    this.secret = process.env.JWT_SECRET!;
  }

  public generateAccessToken = (payload: TokenPayload, expiresIn: string = '24h'): string => {
    return jwt.sign(payload, this.secret, { expiresIn });
  };

  public verifyToken = (token: string): any => {
    return jwt.verify(token, this.secret);
  };
}

export const jwtUtils = new JWTUtils();
