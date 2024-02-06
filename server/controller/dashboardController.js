

exports.homepage = (req, res)=>{

    const locals = {
        title: 'Dashboard',
        description: 'This is the Notes dashboard'
    }

    res.render('./dashboard/dashboard-index',{
        locals,
        layout: '../views/layouts/dashboard'

    })

}


