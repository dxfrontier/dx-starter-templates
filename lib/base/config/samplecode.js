"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleCodeConfigBase = void 0;
const projen_1 = require("projen");
const config_1 = require("../config");
/**
 * Base class for implementing all relevant sample code configuration.
 *
 * This class acts as a base for handling sample code configuration within projects.
 */
class SampleCodeConfigBase extends config_1.Config {
    /**
     * Gets the sample file content.
     *
     * @returns An object where the key is the filename and the value is an array of file lines.
     */
    get sampleCodeFile() {
        return {};
    }
    /**
     * Creates the sample file(s) in the project directory.
     */
    createSampleCode() {
        for (const filePath in this.sampleCodeFile) {
            new projen_1.SampleFile(this.project, filePath, {
                contents: this.sampleCodeFile[filePath].join('\n'),
            });
        }
    }
    applyConfig() {
        this.createSampleCode();
    }
}
exports.SampleCodeConfigBase = SampleCodeConfigBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlY29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYXNlL2NvbmZpZy9zYW1wbGVjb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFvQztBQUNwQyxzQ0FBbUM7QUFFbkM7Ozs7R0FJRztBQUNILE1BQWEsb0JBQXFCLFNBQVEsZUFBTTtJQUM5Qzs7OztPQUlHO0lBQ0gsSUFBYyxjQUFjO1FBQzFCLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVEOztPQUVHO0lBQ08sZ0JBQWdCO1FBQ3hCLEtBQUssTUFBTSxRQUFRLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzNDLElBQUksbUJBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRTtnQkFDckMsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNuRCxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUVlLFdBQVc7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztDQUNGO0FBeEJELG9EQXdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNhbXBsZUZpbGUgfSBmcm9tICdwcm9qZW4nO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IHNhbXBsZSBjb2RlIGNvbmZpZ3VyYXRpb24uXG4gKlxuICogVGhpcyBjbGFzcyBhY3RzIGFzIGEgYmFzZSBmb3IgaGFuZGxpbmcgc2FtcGxlIGNvZGUgY29uZmlndXJhdGlvbiB3aXRoaW4gcHJvamVjdHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBTYW1wbGVDb2RlQ29uZmlnQmFzZSBleHRlbmRzIENvbmZpZyB7XG4gIC8qKlxuICAgKiBHZXRzIHRoZSBzYW1wbGUgZmlsZSBjb250ZW50LlxuICAgKlxuICAgKiBAcmV0dXJucyBBbiBvYmplY3Qgd2hlcmUgdGhlIGtleSBpcyB0aGUgZmlsZW5hbWUgYW5kIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSBvZiBmaWxlIGxpbmVzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzYW1wbGVDb2RlRmlsZSgpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBzYW1wbGUgZmlsZShzKSBpbiB0aGUgcHJvamVjdCBkaXJlY3RvcnkuXG4gICAqL1xuICBwcm90ZWN0ZWQgY3JlYXRlU2FtcGxlQ29kZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGZpbGVQYXRoIGluIHRoaXMuc2FtcGxlQ29kZUZpbGUpIHtcbiAgICAgIG5ldyBTYW1wbGVGaWxlKHRoaXMucHJvamVjdCwgZmlsZVBhdGgsIHtcbiAgICAgICAgY29udGVudHM6IHRoaXMuc2FtcGxlQ29kZUZpbGVbZmlsZVBhdGhdLmpvaW4oJ1xcbicpLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIGFwcGx5Q29uZmlnKCk6IHZvaWQge1xuICAgIHRoaXMuY3JlYXRlU2FtcGxlQ29kZSgpO1xuICB9XG59XG4iXX0=