import { SalesLibrary, SalesLibraryData } from '../../interfaces/common/sales-library';
import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';


@Injectable()
export class SalesLibraryService extends SalesLibraryData {

    constructor() {
        super();
    }

    list(path: string): Observable<any> {
        switch (path) {
            case '': return observableOf(this.home);
            case '/folder1': return observableOf(this.folderOne);
            case '/folder2': return observableOf(this.folderTwo);
            case '/folder3': return observableOf(this.folderThree);
            case '/folder1/folderA': return observableOf(this.folderOneA);
            default: return observableOf(this.home);
        }
    }
    download(file: string): void {
        alert(file + ' is downloading');
    }

    private home: SalesLibrary[] = [
        {
            'name': 'Folder 1',
            'type': 'folder',
            'path': '/folder1',
        },
        {
            'name': 'Folder 2',
            'type': 'folder',
            'path': '/folder2',
        },
        {
            'name': 'Folder 3',
            'type': 'folder',
            'path': '/folder3',
        },
        {
            'name': 'File 1',
            'type': 'file',
            'path': '/file1.mp4',
        },
    ];

    private folderOne: SalesLibrary[] = [
        {
            'name': 'File 1a',
            'type': 'file',
            'path': '/folder1/file1a.text',
        },
        {
            'name': 'file 2a',
            'type': 'file',
            'path': '/file/file2a.mp3',
        },
        {
            'name': 'file 3a',
            'type': 'file',
            'path': '/folder1/file3a.zip',
        },
        {
            'name': 'Folder A',
            'type': 'folder',
            'path': '/folder1/folderA',
        },
    ];

    private folderTwo: SalesLibrary[] = [
        {
            'name': 'File 1b',
            'type': 'file',
            'path': '/folder2/file1b.text',
        },
        {
            'name': 'file 2b',
            'type': 'file',
            'path': '/folder2/file2b.mp3',
        },
    ];

    private folderThree: SalesLibrary[] = [
        {
            'name': 'File 1c',
            'type': 'file',
            'path': '/folder3/file1c.text',
        },
    ];

    private folderOneA: SalesLibrary[] = [
        {
            'name': 'File 5a',
            'type': 'file',
            'path': '/folder1/file5a.text',
        },
        {
            'name': 'file 5a',
            'type': 'file',
            'path': '/file/file5a.mp3',
        },
        {
            'name': 'file 5a',
            'type': 'file',
            'path': '/folder1/file5a.zip',
        },
    ];

}
