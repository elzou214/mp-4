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
  