/**
 * @file Code generator core logic
 *
 * Can use for every language project, here I simplely use React, webpack as an instance.
 * Apparently, I advice you use this tool to reduce duplicate and fussy work.
 */
'use strict';

// Module dependencies.
const fs = require('fs');
const utils = require('./utils');
const conf = require('./conf');



/**
 * @brief   Create file base on a parent directory.
 *
 * @param {parent} String  Parent directory name
 */
const createFiles = (parent) => {
    const files = conf.files;
    for (let filePath in files) {
	const fullFilePath = parent + '/' + filePath;
	utils.mkdirs(fullFilePath);
	fs.writeFile(fullFilePath, files[filePath], (err) => {
	    if (err) {
		throw new Error(err);
	    } else {
		console.log('created file' + fullFilePath);
	    }
	});
    }
}

exports.createFiles = createFiles;

