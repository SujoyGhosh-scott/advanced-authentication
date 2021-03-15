exports.getPrivateData = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "You are authorized to view this page",
  });
};
