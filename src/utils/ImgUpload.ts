const ImgUpload = ({ img }: any) => {
  const fromData = new FormData();
  fromData.append("file", img);
  fromData.append("upload_preset", "expart_future_plan");
  fromData.append("cloud_name", "ddlrfuyzp");
  const url = `https://api.cloudinary.com/v1_1/ddlrfuyzp/image/upload`;
  console.log(fromData);
  return { fromData, url };
};

export default ImgUpload;
