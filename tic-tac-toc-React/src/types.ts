export interface Square{
    children?: React.ReactNode,
    isSelected?: boolean,
    index?: number,
    updatedBoard?(): VoidFunction,
}
export interface clearGame{
    message: string;
}
export type turns = 'X' | 'O';