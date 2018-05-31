import PouchDB from 'pouchdb'

PouchDB.plugin(require('pouchdb-adapter-idb'))
const db = new PouchDB('http://127.0.0.1:5984/pwrcalDB')
/**
 * The line below needs to be uncommented and the line above commented for
 * the app to work in the browser. This is done to make tests pass.
 * Still not sure what's going wrong
 */
// const db = new PouchDB('http://127.0.0.1:5984/pwrcalDB', { adapter: 'idb' })

db.info().then(info => {
  console.log(info)
}).catch(e => {
  console.log(e)
})

/**
 * Function to write docs in bulk to pouchDB
 * @function
 * @async
 * @param {array} docs - The array of doc objects
 * @returns {object}
 */
export const writeBulkDocs = async (docs) => {
  let result
  try {
    result = await db.bulkDocs(docs)
  } catch (e) {
    throw Error('Could not write to pouchDB', e)
  }
  console.log('Done writing to pouchDB')
  return result
}

/**
 * Function to write a single doc to pouchDB
 * @function
 * @async
 * @param {object} doc - The doc objet
 * @returns {object}
 */
export const writeDoc = async (doc) => {
  let result
  try {
    result = await db.put(doc)
  } catch (e) {
    throw Error('Could not write to pouchDB', e)
  }
  return result
}
