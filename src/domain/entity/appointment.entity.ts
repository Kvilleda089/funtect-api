import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'appointments'})
export class AppointmentEntity{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({name: 'full_name'})
    fullName!: string; 

    @Column({name: 'email'})
    email!: string; 

    @Column({name: 'department'})
    departament!: string;

    @Column({name: 'appointment_day'})
    appointmentDay!: Date;

    @Column({name: 'appointment_time', type: 'time' })
    appointmentTime!: string;
    
    

}