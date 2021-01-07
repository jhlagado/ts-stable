export type Ptr = number;

// eslint-disable-next-line no-shadow
export enum CellType {
    int,
    float,
}

export interface State {
    run: boolean;
    here: number;
    oldHere: number;

    ip: number;
    token: number;
    incMode: boolean;

    sp: number;
    rp: number;
}
