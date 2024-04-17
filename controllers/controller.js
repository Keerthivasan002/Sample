import mongoModel from "../models/models.js";

export const insert = async (req, res) => {
  try {
    const { userid_639097,Name,State } = req.body;
    let insertData;
    if (Object.keys(req.body).length == 0) {
      return res.send({ response: "invalid syntax" });
    }
    insertData = await mongoModel.create({ userid_639097,Name,State });
    if (insertData) {
      return res.send({ status: 1, response: "data inserted successfully" });
    }
    return res.send({ status: 0, response: "data not inserted" });
  } catch (error) {
    return res.send({ status: 0, response: error.message });
  }
};

export const GetData = async (req,res)=>{
  try {
    const {userid_639097}= req.body;
    let ifExist
    if(!userid_639097){
      return res.send ({status:0,response:`user Id is not mentioned ${userid_639097}`})
    }
    ifExist = await mongoModel.findOne({userid_639097})
    if(ifExist){
      return res.send({status:1,response:{Name:ifExist.Name}})
    }else{
      return res.send({status:0,response:"User not found"})
    }

  } catch (error) {
    return res.send({ status: 0, response: error.message });
  }
}
