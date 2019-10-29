export class ResumeContent {
    content : {
        basicInfo : {
                firstName: string;
                lastName: string;
                email: string;
        },
        aboutMe : string,
        profilePic: string;
        education: {
            collegeName: string;
            specialization: string;
            year: number;
            degree: string;
        }[],
        contactInfo: {
            mobile: number;
            address: string;
        }
        projectsUndertaken: {
            projectName: string;
            projectDescription: string;
        }[],
        hobbies: string[];
        workExperience: {
            companyName: string;
            jobPosition: string;
            jobDescription: string;
        }[],
        internships: {
            companyName: string;
            jobResponsibility: string;
        },
        languages: string[],
        professionalSkills: {
            skillName: string;
            rate: number;
        },
        careerObjective: string,
        website: string,
        otherAccomplishments: string,
        certifications: {
            certificationName: string;
            certifiedBy: string;
            year: number;
        }
    }
}