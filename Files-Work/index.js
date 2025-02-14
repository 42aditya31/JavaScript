import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'example.txt');

console.log('📌 File Path:', filePath);
console.log('📌 Directory Name:', __dirname);
console.log('📌 File Extension:', path.extname(filePath));

// Step 1: Create a File and Write Initial Content
fs.writeFile(filePath, 'Hello, World!\n', (err) => {
    if (err) throw err;
    console.log('✅ File created and written successfully!');

    // Step 2: Read the File
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;
        console.log('📖 File Content:', data);

        // Step 3: Callback Hell Example - Append Data in Steps
        fs.appendFile(filePath, 'Step 1: Appending more data...\n', (err) => {
            if (err) throw err;

            fs.appendFile(filePath, 'Step 2: Another line...\n', (err) => {
                if (err) throw err;

                fs.appendFile(filePath, 'Step 3: One last line...\n', (err) => {
                    if (err) throw err;
                    console.log('🚨 Callback Hell: Data appended!');

                    // Step 4: Using Promises to Fix Callback Hell
                    async function modifyFile() {
                        try {
                            await fs.promises.appendFile(filePath, '🚀 Using Promises to append data!\n');
                            let newData = await fs.promises.readFile(filePath, 'utf8');
                            console.log('🔄 File Content (After Promises):\n', newData);
                        } catch (err) {
                            console.error('❌ Error:', err);
                        }
                    }
                    modifyFile();
                });
            });
        });
    });
});
