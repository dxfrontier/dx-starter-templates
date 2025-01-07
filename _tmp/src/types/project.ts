import { Project } from 'projen';

export type IsProjectType<T> = T extends Project ? T : never;
