# VERA-game

### START:
- `npm start`
- Go to http://localhost:8000


### How to change data:

#### Simple way:
- Edit `assets/card_descriptions.json` and `assets/card_impacts.json`.

#### Comprehensive way:
- Go to Google spreadsheet url 
- Copy-paste each sheet into http://www.convertcsv.com/csv-to-json.htm
  - In Step 2:
    - Check `First row is column names`
    - Set `Field Separator: Tab`
  - In Step 5:
    - Click `CSV to Keyed JSON`
- Copy the results into http://jsonlint.com/ and click `Validate Json` to make sure JSON is validated.
- Save results by overwriting what's in `assets/card_descriptions.json` and `assets/card_impacts.json`. 

*ALSO: don't edit `assets/pipeline-diagram.svg` willy-nilly. The object/layer names are carefully named to correspond to the data.*

    
