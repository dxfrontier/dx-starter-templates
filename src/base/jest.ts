import { ProjectTypes } from '../types';
import { Config } from './config';

/**
 * Base class for implementing all relevant Jest configuration.
 *
 * This class acts as a base for handling Jest configuration within projects.
 */
export class JestConfigBase extends Config {
  constructor(project: ProjectTypes) {
    super(project);
  }
}
