const fs = require('fs');
const path = require('path');

const metadataFolder = './metadata'; // Folder to save metadata files

// Function to generate metadata
function generateMetadata(startIndex, endIndex, color, image, attributes) {
    const metadata = [];

    for (let i = startIndex; i <= endIndex; i++) {
        const name = `Hume Studios V1 TEE-Proof of Mint #${i}`;
        const description = "This NFT serves as your official proof of mint for Hume Studios' inaugural drop. By minting and retaining this NFT until a future, specified snapshot date, you unlock the opportunity to claim an exclusive Hume Studios V1 Tee. Following the snapshot, a Redemption Voucher will be airdropped to you, allowing you to claim your physical piece of Hume Studios' history. This unique process combines the digital and physical worlds, offering a tangible connection to the Hume Studios community and its first-ever product release.";
        const edition = i;

        metadata.push({
            name,
            description,
            image,
            edition,
            attributes: attributes.map(attr => ({
                trait_type: attr.trait_type,
                value: attr.value
            }))
        });

        // Write metadata to JSON file
        const metadataFilePath = path.join(metadataFolder, `${i}.json`);
        fs.writeFileSync(metadataFilePath, JSON.stringify(metadata[i - startIndex], null, 2));
    }
}



// Define attributes for white and black shirts
const whiteAttributes1 = [
    { trait_type: "Size", value: "Small" },
    { trait_type: "Colour", value: "White" },
    { trait_type: "Material", value: "Cotton" },
    { trait_type: "GSM", value: "320" }
];
const whiteAttributes2 = [
    { trait_type: "Size", value: "Medium" },
    { trait_type: "Colour", value: "White" },
    { trait_type: "Material", value: "Cotton" },
    { trait_type: "GSM", value: "320" }
]; const whiteAttributes3 = [
    { trait_type: "Size", value: "Large" },
    { trait_type: "Colour", value: "White" },
    { trait_type: "Material", value: "Cotton" },
    { trait_type: "GSM", value: "320" }
]; const whiteAttributes4 = [
    { trait_type: "Size", value: "ExtraLarge" },
    { trait_type: "Colour", value: "White" },
    { trait_type: "Material", value: "Cotton" },
    { trait_type: "GSM", value: "320" }
];

const blackAttributes1 = [
    { trait_type: "Size", value: "Small" },
    { trait_type: "Colour", value: "Black" },
    { trait_type: "Material", value: "Cotton" },
    { trait_type: "GSM", value: "320" }
];
const blackAttributes2 = [
    { trait_type: "Size", value: "Medium" },
    { trait_type: "Colour", value: "Black" },
    { trait_type: "Material", value: "Cotton" },
    { trait_type: "GSM", value: "320" }
]; const blackAttributes3 = [
    { trait_type: "Size", value: "Large" },
    { trait_type: "Colour", value: "Black" },
    { trait_type: "Material", value: "Cotton" },
    { trait_type: "GSM", value: "320" }
]; const blackAttributes4 = [
    { trait_type: "Size", value: "ExtraLarge" },
    { trait_type: "Colour", value: "Black" },
    { trait_type: "Material", value: "Cotton" },
    { trait_type: "GSM", value: "320" }
];

generateMetadata(0, 107, "White", "https://tan-distant-locust-825.mypinata.cloud/ipfs/QmXwLJ5CERjMmqQhfjBkHcZSxYvvBy11ALEsNiYzyFAHVm", whiteAttributes1);
generateMetadata(108, 268, "White", "https://tan-distant-locust-825.mypinata.cloud/ipfs/QmXwLJ5CERjMmqQhfjBkHcZSxYvvBy11ALEsNiYzyFAHVm", whiteAttributes2);
generateMetadata(269, 429, "White", "https://tan-distant-locust-825.mypinata.cloud/ipfs/QmXwLJ5CERjMmqQhfjBkHcZSxYvvBy11ALEsNiYzyFAHVm", whiteAttributes3);
generateMetadata(430, 536, "White", "https://tan-distant-locust-825.mypinata.cloud/ipfs/QmXwLJ5CERjMmqQhfjBkHcZSxYvvBy11ALEsNiYzyFAHVm", whiteAttributes4);

generateMetadata(537, 643, "Black", "https://tan-distant-locust-825.mypinata.cloud/ipfs/QmNrge1sTBdB4MsDcwMP4xpxsgy6B5VzUANNKo51Zrg6Py", blackAttributes1);
generateMetadata(644, 804, "Black", "https://tan-distant-locust-825.mypinata.cloud/ipfs/QmNrge1sTBdB4MsDcwMP4xpxsgy6B5VzUANNKo51Zrg6Py", blackAttributes2);
generateMetadata(805, 965, "Black", "https://tan-distant-locust-825.mypinata.cloud/ipfs/QmNrge1sTBdB4MsDcwMP4xpxsgy6B5VzUANNKo51Zrg6Py", blackAttributes3);
generateMetadata(966, 1071, "Black", "https://tan-distant-locust-825.mypinata.cloud/ipfs/QmNrge1sTBdB4MsDcwMP4xpxsgy6B5VzUANNKo51Zrg6Py", blackAttributes4);
