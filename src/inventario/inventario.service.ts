import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';
import { Inventario } from './entities/inventario.entity';

@Injectable()
export class InventarioService {
  constructor(
    @InjectRepository(Inventario)
    private inventarioRepository: Repository<Inventario>,
  ) {}

  create(createInventarioDto: CreateInventarioDto) {
    const nuevo = this.inventarioRepository.create(createInventarioDto);
    return this.inventarioRepository.save(nuevo);
  }

  findAll() {
    return this.inventarioRepository.find();
  }

  async findOne(id: number) {
    const inventario = await this.inventarioRepository.findOneBy({ id });
    if (!inventario) {
      throw new NotFoundException();
    }
    return inventario;
  }

  async update(id: number, updateInventarioDto: UpdateInventarioDto) {
    const inventario = await this.findOne(id);
    Object.assign(inventario, updateInventarioDto);
    return this.inventarioRepository.save(inventario);
  }

  async remove(id: number) {
    const inventario = await this.findOne(id);
    return this.inventarioRepository.remove(inventario);
  }
}