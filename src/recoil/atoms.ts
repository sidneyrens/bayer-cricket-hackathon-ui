import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { User, Question } from '../util/types'

export enum ATOM {
    CURRENT_USER = 'CURRENT_USER',
    CURRENT_QUESTIONS = 'CURRENT_QUESTIONS'
}

const userState = atom({
    key: ATOM.CURRENT_USER, // unique ID (with respect to other atoms/selectors)
    default:{
        id: '',
        userName: '',
        scores: [],
        sponserId: ''
    } as User, // default value (aka initial value)
  });

const questionState = atom({
    key: ATOM.CURRENT_QUESTIONS,
    default: []
})




