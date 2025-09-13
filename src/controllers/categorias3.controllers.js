const categorias=  [
    { id: 1, nombre: 'Categoría 1' },
    { id: 2, nombre: 'Categoría 2' },
    { id: 3, nombre: 'Categoría 3' },
]
const index = (req, res) => {
    res.render('categorias3/index', { categorias });
}

const show = (req, res) => {
    const { id } = req.params;
    const categoria = categorias.find(categoria => categoria.id == id);
    if (!categoria) {
        return res.status(404).send('Categoría no encontrada');
    } else {
    res.render('categorias3/show', { categoria });
    }
}
const create = (req, res) => {
    res.render('categorias3/create');
};
const store = (req, res) => {
    const { nombre } = req.body;
    const nuevaCategoria = {
        id: categorias.length + 1,
        nombre
    };
    categorias.push(nuevaCategoria);
    res.redirect('/categorias3');
}
module.exports = {
    index,
    show,
    create,
    store
}