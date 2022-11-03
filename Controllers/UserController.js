const {User} = require('../models');

class UserController{
    static async register (req,res){
        const {full_name, email, password,gender,role,balance} = req.body;
        try {
            const cekEmail = await User.findOne({
                where: {email}
            });

            if(cekEmail){
                res.status(404).json({
                    message: "Email Already Registered!"
                })
            }else{
                const user = await User.create({
                    full_name, 
                    email, 
                    password,
                    gender,
                    role,
                    balance
                });

                res.status(201).json({
                    message: "Menampilkan data User",
                    data: user
                })
            }
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    }

    static async getUser(req,res){
        try {
            const user = await User.findAll();

            if (user.length > 0){
                res.status(200).json({
                    message: "Menampilkan Data User : ",
                    data: user
                })
            }else{
                res.status(200).json({
                    message: "Tidak Ada Data"
                })
            }
            
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
            
        }
    }

    static async updateUser(req,res){
        const {full_name, email, gender,role,balance} = req.body;
        try {
            // const getId = res.locals.user.id;
            const cekEmail = await User.findOne({
                where:{
                    // id: {[Op.ne]: getId}, //jika id != getId
                    email
                }
            });

            if(cekEmail){
                res.status(400).json({
                    message: "Email Tidak Tersedia!"
                })
            }else{
                const user = await User.update({
                    full_name,
                    email,
                    gender,
                    role,
                    balance
                },{
                    where: {
                        id: req.params.id
                    }
                });
                res.status(200).json({
                    message: "Data Berhasil di Update",
                    // user: {full_name, email, gender,role,balance}
                })
            }
            
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    }

    static async deleteUser (req,res){
        try {
            await User.destroy({
                where: {
                    id: req.params.id
                }
            });

            res.status(200).json({
                message: "Akun berhasil di hapus"
            })
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    }
}

module.exports = UserController;