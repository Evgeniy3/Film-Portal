export type SortType = {
    name: string;
    value: string;
};

export interface IFilterSliceState {
    searchValue: string,
    pageValue: number,
    sortType: SortType,
    sortYear: SortType,
}

