// Delete the Product
export const deleteOne = (Model) => async (req, res) => {
  try {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return res.status(404).json({
        status: "fail",
        message: "No item found with that ID",
      });
    }
    res
      .status(200)
      .json({ status: "success", message: "Item has been deleted..." });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateOne = (Model) => async (req, res) => {
  try {
    const doc = await Model.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({ status: "success", data: { data: doc } });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const createOne = (Model) => async (req, res) => {
  try {
    const doc = await Model.create(req.body);

    res.status(200).json({ status: "success", data: { data: doc } });
  } catch (err) {
    res.status(500).json({ status: "fail", message: err.message });
  }
};

export const getOne = (Model) => async (req, res) => {
  try {
    const doc = await Model.findById(req.params.id);

    if (!doc) {
      return res.status(404).json({
        status: "fail",
        message: "No doc found with that ID",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
};
