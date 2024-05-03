/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("esec94w3q54x0n5")

  collection.name = "maisonsListe"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("esec94w3q54x0n5")

  collection.name = "maison"

  return dao.saveCollection(collection)
})
