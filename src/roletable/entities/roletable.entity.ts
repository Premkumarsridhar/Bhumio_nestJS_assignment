import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Roletable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  name: string;
}
