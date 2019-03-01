export const required = value => value ? undefined: "Заповніть це поле";

export const email = value => {
    const r = /^\w+@\w+\.\w{2,4}$/i;

    if (!r.test(value)) {
        return 'Некоректний email';
    }
    return undefined;
};
export const password = value => {
    if(value.length < 6){
        return 'Password must bo longer than 6';
    }
    return undefined;
};