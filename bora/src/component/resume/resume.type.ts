export interface IInfo {
  title:string;
  position:string;
  content:string;
  phone:string;
  email:string;
}

export interface ISkill {
  name: string;
  level: string;
  icon: string;
}

export interface ICareer {
  companyInfo:ICompanyInfo[];
}

interface ICompanyInfo {
  companyIntro: string;
  companyName: string;
  contents: ICareerContents[];
}

interface ICareerContents {
  team: string; 
  project: string; 
  position: string; 
  content: string[];
  period: string;
}

export interface IEducation {
  education: IEducationContents[]
}

interface IEducationContents {
  school: string;
  period: string;
  graduation: boolean;
}