import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdminService } from 'src/admin/admin.service';
import { CreateAdminDto } from 'src/admin/dto/create-admin-dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private adminService: AdminService,
  ) {}

  @Post('signup')
  async createAdmin(@Body() data: CreateAdminDto) {
    return this.adminService.createAdmin(data);
  }

  @Post('login')
  async login(@Body() data: CreateAdminDto) {
    return this.authService.login(data);
  }
}
