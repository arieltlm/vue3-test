export interface contentItem {
    id:number
    paramTitle: string
    level: levelType
    value:string
}

export type levelType= '高' | '中' | '低'
