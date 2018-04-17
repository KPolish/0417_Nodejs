function route(pathname, handle) {
    console.log('Routing for ' + pathname);
    if (handle[pathname] == 'function')
        return handle[pathname]();
    else return '404 not found!'; 
}

exports.route = route;