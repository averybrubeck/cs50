document.addEventListener('DOMContentLoaded', function () {
    const downloadButton = document.getElementById('downloadButton');
    const imageToDownload = document.getElementById('imageToDownload');

    // Add a click event listener to the button
    downloadButton.addEventListener('click', function () {
        const downloadLink = document.createElement('a');
        downloadLink.href = imageToDownload.src;
        downloadLink.download = 'downloaded_image.jpg'; 
        downloadLink.click();

 
        document.body.removeChild(downloadLink);
    });
});