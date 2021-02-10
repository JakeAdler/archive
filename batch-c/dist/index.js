#!/usr/bin/env node
"use strict";

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _sharp = _interopRequireDefault(require("sharp"));

var _asyncMkdirp = _interopRequireDefault(require("async-mkdirp"));

var _logs = require("./logs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.time("Process took");
const sanitizedFirstArg = process.argv[2].replace(/[^0-9a-zA-Z_-]/gi, '');
let i = 0;

const doesDefaultPathExist = () => {
  let attemptPath = `${sanitizedFirstArg}-converted`;

  if (i !== 0) {
    attemptPath = `${sanitizedFirstArg}-converted-${i}`;
  }

  const attemptedPathExists = _fs.default.existsSync(attemptPath);

  i++;

  if (attemptedPathExists) {
    return doesDefaultPathExist();
  } else {
    return attemptPath;
  }
}; // configure yargs


const allowedFileTypes = ['.png', '.jpg', '.webp'];
const allowedTypeArgs = allowedFileTypes.map(f => f.replace(".", ""));

const argv = require('yargs').options({
  'to': {
    alias: 't',
    describe: 'provide output file type',
    type: 'string',
    choices: allowedTypeArgs,
    demandOption: true
  },
  'out': {
    alias: 'o',
    describe: 'output directory',
    type: 'string',
    default: doesDefaultPathExist()
  },
  'dangerous': {
    alias: 'd',
    describe: "dangerous mode: file might get deleted or overwritten",
    type: 'boolean',
    default: false
  }
}).help().argv; // Globals


const target = {
  directory: sanitizedFirstArg,
  fileType: '.' + argv.to
};
const output = {
  directory: argv.out,
  dangerous: argv.dangerous
};
const systemFiles = ['.DS_Store'];

const init = async (inputObj, outputObj) => {
  const stat = await _fs.default.promises.stat(inputObj.directory);
  const isTargetValid = stat.isDirectory();

  const doesOutputDirExist = _fs.default.existsSync(outputObj.directory);

  if (doesOutputDirExist && !outputObj.dangerous) {
    throw `${output.directory} Exists, please choose a different output directory. If you intended to do this, please run in dangerous mode (--dangerous or -d)`;
  } else {
    await _fs.default.promises.mkdir(output.directory);
  }

  const targetDir = inputObj.directory;
  const outputDir = outputObj.directory;

  if (isTargetValid) {
    return {
      targetDir,
      outputDir
    };
  } else {
    return false;
  }
};

const isImage = fullPath => {
  const filename = fullPath.replace(/^.*[\\\/]/, '');
  const isAllowedFile = allowedFileTypes.some(fileType => {
    return filename.includes(fileType);
  });

  if (isAllowedFile) {
    return filename;
  } else {
    return false;
  }
}; // async walks through directories and returns an array of full paths;


const walk = async (dir, fileList = []) => {
  try {
    const files = await _fs.default.promises.readdir(dir);

    for (const file of files) {
      const stat = await _fs.default.promises.stat(_path.default.join(dir, file));
      if (stat.isDirectory()) fileList = await walk(_path.default.join(dir, file), fileList);else fileList.push(_path.default.join(dir, file));
    }

    return fileList;
  } catch (err) {
    console.error(err);
  }
}; // preforms image conversions and returns an array of objects with a promise (buffer) and path.


const imgToBuffer = async image => {
  try {
    let processedBuffer;
    processedBuffer = await (0, _sharp.default)(image).toFormat(argv.to).toBuffer();
    return {
      path: image,
      buffer: processedBuffer
    };
  } catch (err) {
    console.error(err);
  }
};

const filter = files => {
  let imageSize = 0;
  let nonImageSize = 0;
  const images = files.filter(file => {
    if (isImage(file)) {
      imageSize += _fs.default.statSync(file).size;
      return file;
    }
  });
  const nonImages = files.filter(file => {
    const filename = file.replace(/^.*[\\\/]/, '');

    if (!isImage(file) && !_fs.default.statSync(file).isDirectory() && !systemFiles.includes(filename)) {
      nonImageSize += _fs.default.statSync(file).size;
      return file;
    }
  });

  if (imageSize / 1000000.0 >= 25.0) {
    console.log((0, _logs.largeFilesWarning)(imageSize));
  }

  return {
    images,
    nonImages,
    imageSize,
    nonImageSize
  };
}; // resolves promise of each image buffer -- this is basically an async map;


const processImages = async files => {
  return await Promise.all(files.map(async file => {
    const {
      path,
      buffer
    } = await imgToBuffer(file);
    return {
      path: path,
      buffer: buffer
    };
  }));
};

const writeFileFromBuffer = async (outputPath, buffer) => {
  const bool = _fs.default.existsSync(outputPath);

  if (!bool) {
    await _fs.default.promises.writeFile(outputPath, buffer);
    console.log("Wrote processed image to : ", outputPath);
  }
}; // recursively mkdir for image path if needed, then write to file  


const write = async (imageArray, nonImageArray) => {
  let newImageSize = 0;
  let newOtherSize = 0;

  const checkPathAndWriteImage = async (outputDirectoryPath, outputPath, buffer) => {
    try {
      const bool = _fs.default.existsSync(outputDirectoryPath);

      if (!bool) {
        await (0, _asyncMkdirp.default)(outputDirectoryPath);
      }

      await writeFileFromBuffer(outputPath, buffer);
    } catch (err) {
      console.error(err);
    }
  };

  const checkPathAndWriteOther = async (input, outputPath) => {
    try {
      await _fs.default.promises.copyFile(input, outputPath);
      console.log("Wrote copy of a file to  : ", outputPath);
    } catch (err) {
      console.error(err);
    }
  };

  const withoutWorkingDir = path => {
    return path.substring(0, path.lastIndexOf("/")).replace(target.directory, "");
  };

  for (const _ref of imageArray) {
    const {
      path,
      buffer
    } = _ref;
    const current = {
      withoutWorkingDir: withoutWorkingDir(path),
      blankFilename: path.replace(/^.*[\\\/]/, '').replace(/\.[^/.]+$/, "")
    };
    const outputDirectoryPath = `${output.directory}${current.withoutWorkingDir}`;
    const outputPath = `${outputDirectoryPath}/${current.blankFilename}${target.fileType}`; //TODO: if dangerous mode remove current directory and change output path to firstArg;

    newImageSize += Buffer.byteLength(buffer);
    await checkPathAndWriteImage(outputDirectoryPath, outputPath, buffer);
  }

  for (let file of nonImageArray) {
    try {
      const targetDirectoryTrimmed = target.directory.replace(/[^0-9a-zA-Z_-]/gi, "");
      const current = {
        outputPath: file.replace(targetDirectoryTrimmed, output.directory)
      };
      await checkPathAndWriteOther(file, current.outputPath);
      let fileBuff = await _fs.default.promises.stat(file);
      newOtherSize += fileBuff.size;
    } catch (err) {
      console.error(err);
    }
  }

  return {
    newImageSize,
    newOtherSize
  };
};

const main = async () => {
  try {
    const {
      targetDir,
      outputDir
    } = await init(target, output);
    console.log((0, _logs.initLog)(targetDir, outputDir));
    const files = await walk(targetDir);
    const {
      images,
      nonImages,
      imageSize,
      nonImageSize
    } = filter(files);
    const processedImages = await processImages(images);
    const {
      newImageSize,
      newOtherSize
    } = await write(processedImages, nonImages);
    return {
      imageSize,
      nonImageSize,
      newImageSize,
      newOtherSize
    };
  } catch (error) {
    console.error(error);
  }
};

main().then(({
  imageSize,
  nonImageSize,
  newImageSize,
  newOtherSize
}) => {
  console.log(' \n --------------------------  \n');
  console.log((0, _logs.imageSizeLog)(imageSize, newImageSize));

  if (nonImageSize === newOtherSize) {
    console.log(_logs.otherFileSuccess);
  }

  console.timeEnd("Process took");
  console.log(' \n --------------------------  \n');
  return true;
}).catch(err => {
  console.error(err);
});