
export class Upload {

  async pictureLocation(req, res) {
    if (req?.file?.location)
      return res.json(req.file.location)
    return res.json(null);
  }
}


