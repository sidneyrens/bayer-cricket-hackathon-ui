export interface User {
    id: string;
    userName: string;
    scores: Score[];
    sponserId: string;
}

export interface Score {
    gameDate: Date;
    score: number;
}

export interface Question {
    id: string;
    answerId: string;
    question: string;
    options: Option[];
}

export interface Option {
    id: string;
    answer: string;
}
