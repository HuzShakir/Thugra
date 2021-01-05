 

export interface results {
    backdrop_path:string;
    overview:string;
    title:string;
    original_title:string;
}

export interface Data {
    results:Array<{
        backdrop_path:string;
        overview:string;
        title:string;
        original_title:string;
    }>;
} 