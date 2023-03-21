import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, MaxLength, MinLength } from 'class-validator';

@Entity('usuario')
export class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  @MinLength(1)
  @MaxLength(150)
  @IsString()
  nome: string;

  @Column()
  @MinLength(1)
  @IsString()
  telefone: string;

  @Column()
  @MinLength(1)
  @IsString()
  email: string;
}
