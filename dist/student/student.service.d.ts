import { StudentRepository } from './student.repository';
import { CreateStudentDto } from './dto/createStudent.dto';
import { UpdateStudentDto } from './dto/updateStudent.dto';
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: StudentRepository);
    createStudent(createStudent: CreateStudentDto): Promise<{
        id: number;
        name: string;
        age: number;
        gpa: number;
        classId: number;
    }>;
    getAllStudent(params: {
        page: number;
        take: number;
        name: string;
    }): Promise<{
        id: number;
        name: string;
        age: number;
        gpa: number;
        classId: number;
    }[]>;
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
