import { CreateStudentDto } from './dto/createStudent.dto';
import { StudentService } from './student.service';
import { UpdateStudentDto } from './dto/updateStudent.dto';
export declare class StudentController {
    private studentService;
    constructor(studentService: StudentService);
    create(createStudent: CreateStudentDto): Promise<{
        id: number;
        name: string;
        age: number;
        gpa: number;
        classId: number;
    }>;
    getAllStudent(page: number, take: number, cursor: number, name: string): Promise<{
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
    updateStudent(id: number, updateStudentDto: UpdateStudentDto): Promise<{
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
