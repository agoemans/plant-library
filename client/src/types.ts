import {PlotModel} from "../../server/src/models";

export interface iPlantAttributes {
    plantName: string;
    image: string;
}

export interface iMenuItems {
    title: string;
    cb: () => void;
    imageName: string;
}

export interface iYearlyPlot {
    title: string;
    plots: PlotModel[];
}

export interface iSinglePlot {
    caption: string;
    imageName: string;
}

export interface  iGridMonths {
    blockColor: string;
    months: number [];
    bgColor: string;
}

export interface iPageFooter {
    author: string;
    authorUrl: string;
    siteName: string;
    siteUrl: string;
}
