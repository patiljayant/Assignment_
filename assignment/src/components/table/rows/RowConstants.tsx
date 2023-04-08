interface style {
    backgroundColor: string;
    color?: string;
    borderRadius?: string;
}

export default style

export const headerRowBackgroundColor:string = "#2689FD";

export const evenRowBackgroundColor:string = "#EFEFEF";

export const oddRowBackgroundColor:string = "#E6E6E6";

export const headerRowStyle:style = {
    backgroundColor : headerRowBackgroundColor,
    color : "white",
    borderRadius : "20px 20px 0px 0px"
}

export const evenRowStyle:style = {
    backgroundColor : evenRowBackgroundColor
}

export const oddRowStyle:style = {
    backgroundColor : oddRowBackgroundColor
}

export const tableHeadRowId:number = -1;
