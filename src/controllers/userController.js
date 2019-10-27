
const controller = {};

controller.get = (req,res) => {
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM user', (err, user) => {
            if (err) {
                res.json(err);
            }
            res.render('user', { // VA A RENDERIZAR VISTA USER .EJS
                data: user //
            });
        });
    });
};

controller.post = (req, res) => {
    const data = req.body; //DATA VARIABLE DONDE SE GUARDAN TODOS LOS DATOS QUE VIENEN DEL FORMULARIO
    console.log(req.body)
    req.getConnection((err, connection) => {
        connection.query('INSERT INTO user set ?', data, (err, user) => {
            console.log(user) // IMPRIME USUARIO EN CONSOLA
            res.redirect('/'); // RECARGA PAGINA
            // res.send('works'); //MUESTRA MSJ EN NAVEGADOR
        });
    })
};

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM user WHERE id = ?", [id], (err, rows) => {
            res.render('user_edit', {
                data: rows[0]
            })
        });
    });
};
  
controller.update = (req, res) => {
    const { id } = req.params;
    const newUser = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE user set ? where id = ?', [newUser, id], (err, rows) => {
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM user WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    });
};

module.exports = controller;