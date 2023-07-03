import { Response, Request } from "express";
import { v4 as uuidv4 } from "uuid";
import pool from "../../database/connection";
import { groups, users } from "../../database/queries";

class UsersController {
  async getUsers(req: Request, res: Response) {
    try {
      users.getUsers().then((result) => {
        res.status(200).json(result.rows);
      });
    } catch (error) {
      res.status(500).json("Incorrect request");
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      pool.query(`SELECT * FROM users WHERE id='${id}'`).then((result) => {
        res.status(200).json(result.rows);
      });
    } catch (error) {
      res.status(500).json("Incorrect request");
    }
  }

  async getUserByLogin(req: Request, res: Response) {
    try {
      const { login, password }: { login: string; password: string } = req.body;
      console.log(req.body);

      if (!login || !password) throw Error();

      users
        .getUserByLogin(login)
        .then((result) => {
          if (!result.rows[0]) throw Error("Login incorrect");
          if (password !== result.rows[0].password)
            throw Error("Password incorrect");
          const userInfo = result.rows[0];

          // TODO: DELETE CONCOLE
          console.log("group_id - " + userInfo.group_id)

          groups
            .getGroupById(Number(userInfo.group_id))
            .then((groupInfo) => {
              const groupName = groupInfo.rows[0].group_name;

              if(!groupName) throw new Error("group is undefined")
              // TODO: DELETE CONCOLE
              console.log(groupName);

              res
                .json({
                  ...userInfo,
                  group_name: groupName,
                })
                .status(200);
            })
            .catch((err: Error) => {
              
              // TODO: DELETE CONCOLE
              console.log(err)

              res.status(500).json({ errorMessage: err.message });
            });
        })
        .catch((err: Error) => {

          console.log("ERROR")
          res.status(500).json({ errorMessage: err.message });
        });
    } catch (error) {

      console.log("ERROR")
      res.status(500).json({ errorMessage: error });
    }
  }

  async addUser(req: Request, res: Response) {
    try {
      const {
        login,
        password,
        email,
      }: { login: string; password: string; email: string } = req.body;
      const id: string = uuidv4();

      users.addUser(id, login, password, email).then((result) => {
        users.getUserById(id).then((result) => {
          if (result) {
            res.json(result.rows[0]).status(200);
          }
        });
      });
    } catch (error) {
      res.status(500).json("Incorrect request");
    }
  }
}

export default new UsersController();
