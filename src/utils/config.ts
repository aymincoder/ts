//配置文件,比如github授权登录的回调地址,client_id,client_secert

const config = {
    'oauth_uri':'',
    'redirect_uri':'',
    'client_id':'',
    'client_secret':''
}

//本地开发环境下
if(process.env.NODE_ENV === 'development'){
    config.redirect_uri = '';
    config.client_id = '';
    config.client_secret = '';
}

export default config;