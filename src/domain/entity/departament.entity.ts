import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'departments'})
export class DepartamentEntity{

    @PrimaryGeneratedColumn()
    id!: number; 

    @Column({name: 'department'})
    departament!: string;

}