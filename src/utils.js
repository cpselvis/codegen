/**
 * @file Some useful functions.
 *
 */
'use strict';

const fs = require('fs');

/**
 * @brief Transform file path to directory names
 *
 * @param {path} String       File path
 * @return       Array        Directory names
 */
const splitPath = (path) => {
    console.log(path);
    return path.split(/[\\/]+/);
};

/**
 * @brief Recursively creating directories.
 *
 * @param {filePath} String  e.g:  'demo/index_page/index.html'
 */
const mkdirs = (filePath) => {
    const dirPath = filePath.match(/(.*)\/.*/);
    const parts = splitPath(dirPath[0]);
    
    let currDir;
    parts.forEach((part) => {
	if (!currDir) {
	    currDir = part;
	} else {
	    currDir = currDir + '/' + part;
	}
	fs.mkdir(currDir);
    })
}

exports.mkdirs = mkdirs;
