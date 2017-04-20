# Reduce, Rethink, End the Cycle:
### A game about Utilizing Reform to #RethinkJails 

- By: Luisa Miranda, Kindred Motes, Robert Schroeder, Kristi Riley, Dan Taeyoung, Vere van Gool, Jordan White 
- Created at NEW INC's Create and Advocate: http://www.newinc.org/create-advocate
- For: [The Vera Institute of Justice](https://www.vera.org/)
  - with Kindred Motes (Digital Community Manager @ Vera Institute) and Kristi Riley (Program Associate @ Vera Institute)
- Two days of work: April 15 - April 16, 2017

## Play: 
https://dantaeyoung.github.io/VERA-game/

-----

## Development & Editing:

### Development start:
- `npm start`
- Go to http://localhost:8000
- EVERYTHING is client-side.

### How to change data:

#### Simple way:
- Edit `assets/card_descriptions.json`, `assets/card_impacts.json`, `assets/glossary.json`.

#### Comprehensive way:
- Go to Google spreadsheet url 
- Copy-paste each sheet into http://www.convertcsv.com/csv-to-json.htm
  - In Step 2:
    - Check `First row is column names`
    - Set `Field Separator: Tab`
  - In Step 5:
    - Click `CSV to Keyed JSON`
- Copy the results into http://jsonlint.com/ and click `Validate Json` to make sure JSON is validated.
- Save results by overwriting what's in `assets/card_descriptions.json`, `assets/card_impacts.json`, `asssets/glossary.json`. 

*ALSO: don't edit `assets/pipeline-diagram.svg` willy-nilly. The object/layer names are carefully named to correspond to the data.*

    
