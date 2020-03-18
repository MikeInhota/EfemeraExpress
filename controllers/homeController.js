const homeController = {
    index: (req, res) => {
        let servicos = [
            {nome: 'Desenvolvimento Web', imagem: '/imagens/undraw_dev_focus.svg'},
            {nome: 'Marketing Digital', imagem: '/imagens/undraw_social_dashboard.svg'},
            {nome: 'Consultoria UX', imagem: '/imagens/undraw_mobile_apps.svg'}
        ];
        let banners = [
            '/imagens/banner_ux.jpg',
            '/imagens/full_stack_banner.jpg',
            '/imagens/banner.jpg'
        ];
        res.render('index', {
            title: 'Home', listarServicos: servicos
        });
    }
};

module.exports = homeController;