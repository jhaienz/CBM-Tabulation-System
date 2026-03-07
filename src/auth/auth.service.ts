import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAdminDto } from 'src/admin/dto/create.admin.dto';
import * as bcrypt from 'bcrypt';
import { Admin } from 'src/admin/schema/admin.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Role } from 'src/common/enums/roles.enum';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Admin.name) private adminModel: Model<Admin>,
    private jwtService: JwtService,
  ) {}

  async loginAdmin(data: CreateAdminDto) {
    const { username, password } = data;
    const admin = await this.adminModel.findOne({ username });
    if (!admin) throw new UnauthorizedException('Invalid credentials');

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    return this.jwtService.sign({
      id: admin._id,
      username: admin.username,
      role: Role.ADMIN,
    });
  }

  async loginJudge(data: CreateAdminDto) {}
}
