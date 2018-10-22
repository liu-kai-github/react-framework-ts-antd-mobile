interface Iuser {
    regionID: number;
    schoolID: number;
    gradeID: number;
    classID: number;
    userID: number;
    systemID: string;
    token: string;
}

let user: Iuser;

if (process.env.NODE_ENV === 'development') {
    user = {
        regionID: 110000,
        schoolID: 1153,
        gradeID: 1012017,
        classID: 7,
        userID: 20310588,
        systemID: '08003022',
        token: 'e258e6d0458bfac7e10410473e55ed37',
    };
} else {
    user = {
        regionID: Number(window.sessionStorage.getItem('RegionID')),
        schoolID: Number(window.sessionStorage.getItem('schoolID')),
        gradeID: Number(window.sessionStorage.getItem('grade')),
        classID: Number(window.sessionStorage.getItem('stuClass')),
        userID: Number(window.sessionStorage.getItem('UserID')),
        systemID: window.sessionStorage.getItem('systemID') || '',
        token: window.sessionStorage.getItem('token') || '',
    };
}

export const regionID: number = user.regionID;
export const schoolID: number = user.schoolID;
export const gradeID: number = user.gradeID;
export const classID: number = user.classID;
export const userID: number = user.userID;
export const systemID: string = user.systemID;
export const token: string = user.token;

// export const regionID: number = Number(window.sessionStorage.getItem('RegionID'));
// export const schoolID: number = Number(window.sessionStorage.getItem('schoolID'));
// export const gradeID: number = Number(window.sessionStorage.getItem('grade'));
// export const classID: number = Number(window.sessionStorage.getItem('stuClass'));
// export const userID: number = Number(window.sessionStorage.getItem('UserID'));
// export const token: string = window.sessionStorage.getItem('token') || '';
