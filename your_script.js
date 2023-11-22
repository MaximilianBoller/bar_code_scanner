const videoElem = document.getElementById('video-preview');

function onScanSuccess(qrCodeMessage) {
  console.log(`Scanned QR code: ${qrCodeMessage}`);
  // You can perform further actions with the scanned QR code here
}

function onScanFailure(error) {
  // Handle scan failure
  console.error(error);
}

const html5QrCode = new Html5Qrcode('video-preview');

html5QrCode.start(
  { facingMode: 'environment' },  // Use the rear camera
  { fps: 10, qrbox: 250 },        // Set frames per second and QR code box size
  onScanSuccess,
  onScanFailure
);
