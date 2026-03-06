import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from 'src/admin/dto/create-admin-dto';

@Injectable()
export class AuthService {
  async login(data: CreateAdminDto) {}
}
