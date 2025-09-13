const inventario = [
    { id: 1, descripcion: 'Item de ejemplo 1' },
    { id: 2, descripcion: 'Item de ejemplo 2' },
    { id: 3, descripcion: 'Item de ejemplo 3' },
];

const index = (req, res) => {
    res.render('inventario/index', { inventario });
};

const show = (req, res) => {
    const { id } = req.params;
    const item = inventario.find(item => item.id == id);
    if (!item) {
        return res.status(404).send('Item de inventario no encontrado');
    }
    res.render('inventario/show', { item });
};

const create = (req, res) => {
    res.render('inventario/create');
};

const store = (req, res) => {
    const { descripcion } = req.body;
    const nuevoItem = {
        id: inventario.length + 1,
        descripcion
    };
    inventario.push(nuevoItem);
    res.redirect('/inventario');
};

module.exports = {
    index,
    show,
    create,
    store
};