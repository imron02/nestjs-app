import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { LoginDto } from 'src/dto/auth.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<any> {
    const user = await this.userService.findByEmail(loginDto.email);

    if (user) {
      const isPasswordValid = bcrypt.compareSync(
        loginDto.password,
        user.password,
      );

      if (isPasswordValid) {
        return this.authService.login(user);
      }
    }

    throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
  }
}
