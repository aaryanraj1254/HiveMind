
const QRCode = require('../models/QRCode'); 

const saveQRCode = async (req, res) => {
  try {
    const { eventId, eventName, date } = req.body;
    const qrCode = req.qrCode; 
    qrCode.save();

    
    


    
    

    console.log("QR Code saved:", qrCode);
    res.status(201).json({ message: "QR Code generated and saved!", qrCode: qrCode });
  } catch (error) {
    console.error("Failed to save QR code:", error);
    res.status(500).json({ error: "Failed to save QR code" });
  }
};

module.exports = { saveQRCode };