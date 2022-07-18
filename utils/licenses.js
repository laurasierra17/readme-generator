            // "GNU GPLv3", 
            // "GNU AGPLv3", 
            // "GNU LGPLv3", 
            // "Mozilla Public License 2.0", 
            // "Apache License 2.0", 
            // "Boost Software License 1.0", 
            // "The Unlicense", 
            // "Eclipse Public License 2.0", 
            // "Creative Commons Zero v1.0 Universal", 
            // "BSD 2-Clause \"Simpllified\" License", "BSD 3-Clause \"New\" or \"Revised\" License"

const licenses = [
    {
        license: "No License",
        licenseBadge: "",
        licenseLink: "",
        licenseSection: ""
    },
    {
        license: "MIT",
        licenseBadge: "https://img.shields.io/badge/License-MIT-yellow.svg",
        licenseLink: "https://opensource.org/licenses/MIT",
        licenseSection: 
        `Copyright ${year} ${name}
    
        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
    },
    {
        license: "GNU GPLv3",
        licenseBadge: "https://img.shields.io/badge/License-GPLv3-blue.svg",
        licenseLink: "https://www.gnu.org/licenses/gpl-3.0",
        licenseSection: 
    },
];

module.exports = licenses;