# file-manager
simple file manager for rs-shool assignment


```bash
npm run start -- --username=YOURNAME
```
to run script. If used on windows and you get an error  with two dashes, try to run with 3 (sope windows-people told that is worked)

```bash
npm run start --- --username=YOURNAME
```


- Navigation & working directory (nwd)
    - (streams is not needed for this command) Go upper from current directory (when you are in the root folder this operation shouldn't change working directory)  
    ```bash
    up
    ```
    - (streams is not needed for this command) Go to dedicated folder from current directory (`path_to_directory` can be relative or absolute)
    ```bash
    cd YOUR/FOLDER
    ```
    - (streams is not needed for this command) List all files and folder in current directory and print it to console
    ```bash
    ls
    ```
- Basic operations with files
    - (STREAM) Read file and print it's content in console: 
    ```bash
    cat /home/user/file.txt
    ```
    - (STREAM) Create empty file in current working directory: 
    ```bash
    add file.txt
    ```
    - (streams is not needed for this command) Rename file: 
    ```bash
    rn /home/user/oldname.txt newname.txt
    ```
    - (STREAM) Copy file: 
    ```bash
    cp /home/user/mypic.jpg ./Pictures
    ```
    - (STREAM) Move file (same as copy but initial file is deleted): 
    ```bash
    mv /home/user/AnotherPic.jpg ./Pictures
    ```
    - (streams is not needed for this command) Delete file: 
    ```bash
    rm /home/user/AnotherPic.jpg
    ```
- Operating system info (prints following information in console)
    - (streams is not needed for this command) Get EOL (default system End-Of-Line)  
    ```bash
    os --EOL
    ```
    - (streams is not needed for this command) Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them)  
    ```bash
    os --cpus
    ```
    - (streams is not needed for this command)  Get home directory: 
    ```bash
    os --homedir
    ```
    - (streams is not needed for this command) Get current *system user name* (Do not confuse with the username that is set when the application starts)  
    ```bash
    os --username
    ```
    - (streams is not needed for this command)  Get CPU architecture for which Node.js binary has compiled  
    ```bash
    os --architecture
    ```
- (STREAM) Hash calculation  
    - Calculate hash for file and print it into console  
    ```bash
    hash /home/user/gimmeHash.txt
    ```
- Compress and decompress operations  
- (STREAM) Compress file (using Brotli algorytm)  
    ```bash
    compress /home/user/fileToCompress.txt /home/user/DIRECTORY
    ```
- (STREAM) Decompress file (using Brotli algorytm)  
    ```bash
    decompress /home/user/DIRECTORY/fileToDeCompress.txt.br ./Videos
    ```