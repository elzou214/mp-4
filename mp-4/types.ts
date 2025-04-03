export type InfoProps = {
    totalrecordsperquery: number;
    totalrecords: number;
    pages: number;
    page: number;
    next: string;
    prev: string;
    responsetime: string;
  };
  
  export type MuseumResponse = {
    info: InfoProps;
    records: any[];
    aggregations: Record<string, any>; 
  };
  
  export type MuseumRecord = {
    id: number;
    title?: string;
    primaryimageurl?: string;
    dated?: string;
    medium?: string;
    people?: { name: string }[];
  };