import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  // Esto sirve para poder manipular la base de datos de MongoDB
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  
  create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    // Guardar el usuario creado por medio de Swagger en MongoDB
    return createdUser.save();
  }

  findAll() {
    return this.userModel.find().exec();
  }

  findOne(id: string) {
    return this.userModel.findById(id).exec();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
