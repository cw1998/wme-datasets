# WME Ireland Datasets
This project contains the files needed to build the Waze Ireland Datasets download website.
The project was built in response to the need for an easy way to show townland geometry data on the Waze map editor.
Prior to this website being created, a script called [Townland Clipper](https://github.com/cw1998/townland-clipper) was 
created to process the massive townland geometry datasets made available from an open data 
organisation within the Irish government.

This script takes those data sets and is able to split them up into smaller sets on a per county basis, as well as perform
some further processing to reduce the file sizes for those with less powerful computers.

That's where this website comes in. Since people may still find it difficult to process the datasets themselves (since they 
may not be familiar with the setup of a Python envrionment), I decided to process all the available townland geometry datasets
and make them available on this website, which is hosted at <https://waze.cw1998.uk>.

## Requirements to build the project
The project is built with Jekyll and Gulp. Frontend, the project uses the [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) 
framework to keep the site clean, easy to navigate and use.

To build this project you will need:
* node.js
  * `govuk-frontend`
  * Dev only:
    * `gulp`
    * `gulp-concat` 
    * `gulp-sass`
    * `gulp-util`
* Jekyll

## Running the project
You must first install the required Node modules by running `npm install` or `npm install -g`.

To run the project, run `gulp` from the project root. If you are on Windows, you will need to tweak the gulpfile slightly to allow Jekyll to execute.
Change `jekyll` to `jekyll.bat`.

## Structure
There are two main components to the site at the moment. Resources and Instructions. Resources are sections of the site containing links to 
download datasets (such as townland geometry) and instructions are generally provided alongside resources and give guidance on how to
use the datasets, and/or get the most out of them in WME.

## License
The [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) framework is released under the MIT License, therefore this project is
released under the same license.

## Contact
If you can't get the project running, I am happy to help! Send me an email, contact me on Waze (cw1998) or open an issue.

### Thanks to
Waze Ireland Country Managers: David, Yanis and Arthur for their support and encouragement. Waze UK Community Coordinator, Tim, for his help
with getting the datasets compatible with his WME script for viewing datasets in WME.