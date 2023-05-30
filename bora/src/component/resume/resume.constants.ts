import { Education } from './education';
import { ICareer, IEducation, IInfo, ISkill } from './resume.type';
import react from '../../assets/svg/react.svg'
import js from '../../assets/svg/js.svg'
import ts from '../../assets/svg/ts.svg'
import java from '../../assets/svg/java.svg'
import python from '../../assets/svg/python.svg'
import node from '../../assets/svg/node.svg'

export const INFO_INITIAL_VALUE : IInfo = {
  title: '',
  position:'',
  content:'',
  phone:'',
  email:'',
}

export const SKILL_INITIAL_VALUE: {language : ISkill[]} = {
  language :[{name:'', level:'', icon:''}]
}

export const path = (string) =>{
  let path ;
  switch(string){
    case 'react':
      path = react;
      break;
    case 'js':
      path = js;
      break;
    case 'ts':
      path = ts;
      break;
    case 'python':
      path = python;
      break;
    case 'java':
      path = java;
      break;
    case 'node':
      path = node;
      break;
  }
  return path;
}

export const CAREER_INITIAL_VALUE:ICareer = {
  companyInfo :[
    {
      companyIntro : '',
      companyName : '',
      contents: [{
        team : '',
        project : '',
        position : '',
        period:'',
        content : []
      }]
    }
  ]
}

export const EDUCATION_INITIAL_VALUE:IEducation = {
  education :[
    {
      period: '',
      school:'',
      graduation: false,
    }
  ]
}