import { Injectable } from '@angular/core';
import { Couchbase } from 'nativescript-couchbase';

@Injectable()
export class DatabaseService {

  private dbType;

  private database: Couchbase;

  constructor() { }

  ngOnInit() { }

  getDataBase(dbType: string): Couchbase {
    this.dbType = dbType;
    this.database = new Couchbase(dbType + '-database');
    this.database.createView(dbType, '1', (document, emitter) => {
      if (document.type === dbType) {
        emitter.emit(document._id, document);
      }
    });
    return this.database;
  }

  /** CRUD */
  createDocument(documentItem): number {
    return this.database.createDocument(documentItem);
  }

  readDocument(documentId: number) {
    return this.database.getDocument(documentId.toString());
  }

  updateDocument(documentId: number, documentItem): void {
    this.database.updateDocument(documentId.toString(), documentItem);
  }

  deleteDocument(documentId: number): boolean {
    return this.database.deleteDocument(documentId.toString());
  }

  /** Make Query's */
  createMapReduceView() {
    return this.database.createView(this.dbType, '1', (document, emitter) => {
      emitter.emit(JSON.parse(document)._id, document);
    }
    );
  }

  queryMapReduceView(viewName: string, options: object) {
    const list = [];
    // {descending : false, limit : 20,  skip : 1, startKey: "name to strat with", endKey:"name to end at"};
    const rows = this.database.executeQuery(viewName, options);
    for (let i = 0; i < rows.length; i++) {
      list.push(JSON.parse(rows[i]));
    }
    return list;
  }

  getMultipleDBs(dataBaseTypes: string[]): Couchbase[] {
    const DBs: Couchbase[] = [];
    for (let i = 0; i < dataBaseTypes.length; i++) {
      DBs.push(this.getDataBase(dataBaseTypes[i]));
    }
    return DBs;
  }
}
