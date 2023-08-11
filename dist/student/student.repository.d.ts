import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStudentDto } from './dto/createStudent.dto';
import { UpdateStudentDto } from './dto/updateStudent.dto';
import { Prisma, Student } from '@prisma/client';
export declare class StudentRepository {
    private prisma;
    constructor(prisma: PrismaService);
    createStudent(createStudent: CreateStudentDto): Promise<{
        id: number;
        name: string;
        age: number;
        gpa: number;
        classId: number;
    }>;
    getAllStudent(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.StudentWhereUniqueInput;
        where?: Prisma.StudentWhereInput;
        orderBy?: Prisma.StudentOrderByWithRelationInput;
    }): Promise<Student[]>;
    getStudentById(id: number): Promise<{
        id: number;
        name: string;
        age: number;
        gpa: number;
        classId: number;
    }>;
    updateStudent(id: number, data: UpdateStudentDto): Promise<{
        id: number;
        name: string;
        age: number;
        gpa: number;
        classId: number;
    }>;
    removeStudent(id: number): Promise<{
        id: number;
        name: string;
        age: number;
        gpa: number;
        classId: number;
    }>;
}
