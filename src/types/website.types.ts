
export type Project = {
    id: number;
    title: string;
    subtitle: string;
    projectUrl: string;
    target?: string;
    dateCreated: Date;
    dateUpdated: Date;
    delay: number;
  };