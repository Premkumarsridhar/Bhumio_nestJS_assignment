import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class MasterTable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 40 })
  name: string;

  @Column({ length: 50 })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column()
  role_id: number;
}
