function printFileInfo (filePath) {
    let file = filePath.split("\\").pop();

    let fileName = file.substring(0, file.lastIndexOf('.'));
    let fileExtension = file.substring(file.lastIndexOf('.') + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

printFileInfo("C:\\Internal\\training-internal\\Template.pptx");
printFileInfo("C:\\Projects\\Data-Structures\\LinkedList.cs");