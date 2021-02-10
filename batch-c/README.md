# batch-c

-   [Problem/Solution](#problem-solution)
-   [Installation](#installation)
-   [Usage](#usage)

## Problem:<a name="#problem-solution"></a>
- You have a folder with images in them, there is nesting and mixed file types and you want to quickly convert all of the images to a different file format (probably [WebP](https://developers.google.com/speed/webp/) 😉) . Take the following file structure for example: 

```bash
images/
├── SomeText.txt
├── Trees.jpg
├── foo
│   ├── SomeScript.js 
│   ├── Chair.jpg
│   └── Chair Copy.jpg
└── bar
    ├── Leaves.jpg
    └── baz
        └── Things.jpg
```
## Solution:

```bash
    batch-c images --to webp
```

- Batch-c converts multiple images inside a directory, all while preserving file structure (including non image files)

- If we run the command above on the `images` directory from the previous example, we get this:

```bash
images-converted/
├── SomeText.txt
├── Trees.webp
├── foo
│   ├── SomeScript.js 
│   ├── Chair.webp
│   └── Chair Copy.webp
└── bar
    ├── Leaves.webp
    └── baz
        └── Things.webp
```

- Our file structure is preserved and all the images have been converted 👍
## Installation<a name="installation"></a>
```bash
    npm install --global batch-c || npm i -G batch-c
```

## Usage<a name="usage"></a>

```bash
    batch-c [DIRECTORY] --to [FILE_TYPE] 
```

| Argument | Required | Default | Description  | Type |
|---|---|---|---|---|
| `--to` or `-t`  | `true` | `none` |Output file type.  |  `String`: one of [`png`, `jpg`, `jpeg`, `webp`]  |
| `--out` or `-o` | `false` | `[ORIGINAL_DIR_NAME]-converted` | Output directory name.  | `String`: any   |
| `--dangerous` or `-d` | `false` | `false` |Passing this argument enables dangerous mode, batch-c will overwrite and replace images with the converted ones.  | `Boolean`: true or false    |
