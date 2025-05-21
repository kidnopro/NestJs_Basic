import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(user: Partial<User>) {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  async findAll() {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, user: Partial<User>) {
    await this.userRepository.update(id, user);
    return this.findOne(id);
  }

  async delete(id: number) {
    const user = await this.findOne(id);
    if (user) {
      await this.userRepository.delete(id);
    }
    return user;
  }
}
