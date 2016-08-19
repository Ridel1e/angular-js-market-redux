/**
 * Created by ridel1e on 19/08/16.
 */
  
class BaseApi {
  constructor($http) {
    this._$http = $http;
    this._idAttribute = '_id';
    this._url = "";
  }

  remove(item) {
    return this._$http
      .delete(this._url + '/' + item[this._idAttribute] + '?rev=' + item._rev)
      .then(response => {
        return response.data[this._idAttribute];
      })
  }

  loadAll() {
    return this._$http
      .get(this._url + '/_all_docs?include_docs=true')
      .then(response => {
        return this._extractCollection(response.data.rows)
      })
  }

  save(item) {
    return this._$http
      .post(this._url, item)
      .then(response => {
        return this._extract(item, response)
      })
  }

  update(item) {
    return this._$http
      .put(this._url + '/' + item[this._idAttribute], item)
      .then(response => {
        return Object.assign({}, item, {
          _rev: response.data.rev
        });
      });
  }

  _extract(item, response) {
    let newItem =
      Object.assign({}, item);

    newItem[this._idAttribute] = response.data.id;
    newItem._rev = response.data.rev;

    return newItem;
  }

  _extractCollection(collection) {
    let extractedCollection = [];
    
    collection
      .forEach(item => {
        let extractedItem = item.doc;

        extractedItem[this._idAttribute] = extractedItem._id;
        if(this._idAttribute !== '_id') {
          delete extractedItem._id
        }
        
        extractedCollection.push(extractedItem);
      });
    
    return extractedCollection;
  }
}

export default BaseApi;