import { nextTick } from "q";

var Airtable = require("airtable");

var base = new Airtable({ apiKey: "key8b2zzEwI2BEiRl" }).base(
  "appeF1WBhrIqyiyaX"
);

const createRecord = record => ({
  Afbeelding: record.get("Afbeelding"),
  Categorie: record.get("Categorie"),
  Coins: record.get("Coins"),
  Naam: record.get("Naam"),
  Beschrijving: record.get("Beschrijving")
});

const AirtableAPI = {
  get: (next = () => {}) => {
    base("Shop")
      .select({
        maxRecords: 100,
        view: "Grid view"
      })
      .eachPage(
        function page(records, fetchNextPage) {
          const result = records.map(createRecord);
          next(result);
          fetchNextPage();
          return records;
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  }
};

export default AirtableAPI;
