export interface Doctor {
    id: string,
    hopitalId?: string,
    name: string,
    description?: string,
    phone?: string,
    photo?: string,
    cv?: string,
    status?: string,
    specialities: string[],
    languages: string[]
}
