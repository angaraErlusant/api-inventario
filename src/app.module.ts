import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { InventarioModule } from './inventario/inventario.module'; 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQLHOST || 'localhost',
      port: parseInt(process.env.MYSQLPORT, 10) || 3306,
      username: process.env.MYSQLUSER || 'root',
      password: process.env.MYSQLPASSWORD || '',
      database: process.env.MYSQLDATABASE || 'practica_nest',
      autoLoadEntities: true,
      synchronize: true, 
    }),
    UsersModule,
    AuthModule,
    InventarioModule, 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}