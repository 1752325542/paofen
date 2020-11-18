
let http=require('http');
let url=require('url');
let util=require('util') 
let fs=require('fs');
let server=http.createServer((req,res)=>{
	//拿到文件路径
	var pathname=url.parse(req.url).pathname;
	console.log("file"+pathname.substring(1));
    //fs.readFile()
    fs.readFile(pathname.substring(1),function(err,data){
    	if(err){
    		res.writeHead(404,{
    			'Content-Type':'text/html'
    		});   		
    	}else{
    		res.writeHead(200,{
    			'Content-Type':'text/html'
    		})
    		res.write(data.toString());t
    	}
    	res.end()
    })
})
server.listen(8091,'127.0.0.1',()=>{
	console.log("服务器已经运行，请打开浏览，输入：http://127.0.0.1:3000/来访问")
})

