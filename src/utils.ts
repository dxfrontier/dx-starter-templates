import { Component } from 'projen/lib/component';
import { BaseProject } from './base/project';
import { Config } from './base/config';
import { JsiiProject } from './jsii/project';

export function registerConfig(comps: Component[]): void {
  for (const comp of comps) {
    if (comp instanceof Config) {
      comp.registerConfig();
    }
  }
}

export function isValidProjectTypes(project: unknown): boolean {
  return project instanceof BaseProject || project instanceof JsiiProject;
}
