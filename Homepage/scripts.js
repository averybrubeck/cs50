document.addEventListener('DOMContentLoaded', function () {
    // Get references to the button and image elements
    const downloadButton = document.getElementById('downloadButton');
    const imageToDownload = document.getElementById('imageToDownload');

    // Add a click event listener to the button
    downloadButton.addEventListener('click', function () {
        // Create a temporary anchor element
        const downloadLink = document.createElement('a');
        downloadLink.href = imageToDownload.src;
        downloadLink.download = 'downloaded_image.jpg'; // Specify the desired filename

        // Trigger a click event on the anchor element to start the download
        downloadLink.click();

        // Clean up: remove the temporary anchor element
        document.body.removeChild(downloadLink);
    });
});