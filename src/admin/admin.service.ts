import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Admin, AdminDocument } from './schema/admin.schema';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAdminDto } from './dto/create-admin-dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private adminModel: Model<AdminDocument>,
  ) {}

  async createAdmin(data: CreateAdminDto) {
    const existingAdmin = await this.adminModel.findOne({
      username: data.username,
    });

    if (existingAdmin) {
      throw new HttpException(
        'User with this username already exists',
        HttpStatus.CONFLICT,
      );
    }
    console.log(data.username, data.password);

    const hashedPassword = await bcrypt.hash(data.password, 10);

    await this.adminModel.create({
      username: data.username,
      password: hashedPassword,
    });

    return {
      success: true,
      msg: 'Admin created Successfully',
    };
  }
}
