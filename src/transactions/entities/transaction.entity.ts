import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Transaction {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'bytea' })
    pdf_data: Buffer

    @PrimaryGeneratedColumn()
    userid: number;

}
