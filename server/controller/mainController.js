

exports.homepage = async (req, res)=>{
    const locals = {
        title: 'NOTES',
        description : 'Public Note Taking'
    };
    res.render('index',{
       locals,
       layout: '../views/layouts/display' 
    })

}

exports.about = async(req, res)=>{
    res.render('about')
}

exports.faq = async (req, res)=>{
    res.render('faq')
}