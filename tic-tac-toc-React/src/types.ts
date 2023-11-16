export interface Square{
    children?: React.ReactNode,
    isSelected?: boolean,
    index?: number,
    updatedBoard?(): VoidFunction,
}
export type turns = 'X' | 'O';