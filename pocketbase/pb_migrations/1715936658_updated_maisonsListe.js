/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("esec94w3q54x0n5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aldyelya",
    "name": "relation",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "it30j1hnc474da3",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("esec94w3q54x0n5")

  // remove
  collection.schema.removeField("aldyelya")

  return dao.saveCollection(collection)
})
