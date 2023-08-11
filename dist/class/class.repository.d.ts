import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClassDto } from './dto/createClass.dto';
import { UpdateClassDto } from './dto/updateClass.dto';
export declare class ClassRepository {
    private prisma;
    constructor(prisma: PrismaService);
    createClass(data: CreateClassDto): Promise<{
        id: number;
        name: string;
        address: string;
    }>;
    getAllClass(): Promise<({
        student: {
            id: number;
            name: string;
            age: number;
            gpa: number;
            classId: number;
        }[];
    } & {
        id: number;
        name: string;
        address: string;
    })[]>;
    getClassById(id: number): Promise<{
        id: number;
        name: string;
        address: string;
    }>;
    updateClass(id: number, data: UpdateClassDto): Promise<{
        id: number;
        name: string;
        address: string;
    }>;
    removeClass(id: number): Promise<void>;
}
