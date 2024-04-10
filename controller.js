const uploadFile = (req, res) => {
  try {
    if (req.file) {
      const doccument = `http://localhost:3039/${req.file.filename}`;
      return res.status(200).json({
        status: 200,
        messsage: "File uploaded successfully",
        file: doccument,
      });
    }
    return res.status(400).json({
      status: 400,
      messsage: "File not found",
      file: {},
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Server Error !",
      error,
      stack: error.stack,
    });
  }
};

module.exports = uploadFile;
