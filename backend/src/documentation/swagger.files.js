/**
 * @swagger
 * /files/list:
 *   get:
 *     summary: Returns a list of available file names
 *     tags: [Files]
 *     responses:
 *       200:
 *         description: List of files retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     files:
 *                       type: array
 *                       items:
 *                         type: string
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: string
 *               example:
 *                 data:
 *                   files:
 *                     - test1.csv
 *                     - test2.csv
 *                     - test3.csv
 *                     - test4.csv
 *                     - test5.csv
 *                 errors: []
 *       500:
 *         description: Internal error when retrieving the files
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                   example: ["Internal server error"]

 * /files/data:
 *   get:
 *     summary: Returns the formatted content of the CSV files
 *     tags: [Files]
 *     parameters:
 *       - in: query
 *         name: fileName
 *         schema:
 *           type: string
 *         required: false
 *         description: Specific file name to filter (e.g., test1.csv)
 *     responses:
 *       200:
 *         description: List of valid lines formatted from CSV files
 *         content:
 *           application/json:
 *              schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       file:
 *                         type: string
 *                         example: test2.csv
 *                       text:
 *                         type: string
 *                         example: Hello world
 *                       number:
 *                         type: string
 *                         example: "1234"
 *                       hex:
 *                         type: string
 *                         example: "6f5902ac237024bdd0c176cb93063dc4"
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: string
 *               example:
 *                 data:
 *                   - file: "test2.csv"
 *                     text: "lTSaj"
 *                     number: "01101"
 *                     hex: "fb7a3db5ceb61db9fcd5b57f04496ced"
 *                   - file: "test3.csv"
 *                     text: "LBbVuCRGf"
 *                     number: "59"
 *                     hex: "535300cc034ccf476f6a001471c48a05"
 *                   - file: "test9.csv"
 *                     text: "DWfsKbA"
 *                     number: "34751740"
 *                     hex: "b6ee1ddaa406a8b9e426f8d69808ff01"
 *                 errors: []
 *       400:
 *         description: Invalid query parameter error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["Unknown query param"]
 *       404:
 *         description: Requested file not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["File not found"]
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["Internal server error"]
 */
