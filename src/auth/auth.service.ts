import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/typeorm/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(user: User) {
    const payload = { username: user.email, sub: user.id };
    console.log('payload', payload);
    return { access_token: this.jwtService.sign(payload) };
  }
}
