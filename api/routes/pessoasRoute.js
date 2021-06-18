const { Router } = require("express");
const PessoaController = require("../controllers/PessoaControler");

const router = Router();

router.get("/pessoas", PessoaController.listAll);
router.get("/pessoas/:pessoaID", PessoaController.listById);
router.post("/pessoas", PessoaController.createPerson);
router.patch("/pessoas/:pessoaID", PessoaController.updatePerson);
router.delete("/pessoas/:pessoaID", PessoaController.deletePerson);

module.exports = router;
