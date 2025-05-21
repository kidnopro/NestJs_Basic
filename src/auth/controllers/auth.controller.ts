import { Controller, Post, Body, UseGuards } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import { RegisterDto } from '../dtos/register.dto';
import { LoginDto } from '../dtos/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('profile')
  @UseGuards(AuthGuard('jwt'))
  getProfile() {
    return { message: 'This is a protected route' };
  }
}
