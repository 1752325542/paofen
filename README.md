# 系统截图
![image](https://github.com/1752325542/paofen/blob/master/doc/1.png)
![image](https://github.com/1752325542/paofen/blob/master/doc/2.png)


# 使用说明
	1. 本系统仅限交流、可以免费用使用，如需购买源码联系 QQ：1310651206
	2. doc/短信回调.apk (安卓监控APK)


# 系统安装
	1. CentOS8.0以上系统
	2.	安装Nginx,
		yum install -y nginx  
		将站指向程序中的$path/daifu/web目录
	3.	安装Postgresql
		yum -y install postgresql-server
		service postgresql initdb
		service postgresql restart
		并建创建数据库名称:pay,将Postgres密码修改为：devops,数据库备分见：$/doc/db.sql
	4.	运行$path/cmd/main数据服务,及可以正常运行,注$path为环境变量
	5.	管理员账号和密码都是：admin
	6.  安装成功后进入模拟下单地址:http://localhost/logic/qr/cash
	

# 系统功能
	1.	商户管理: 支持商户入驻，商户需要向平台方提供相关的资料备案。
	2.	账户管理: 渠道账户管理，支持共享账户（个人商户）及自有账户。
	3.	通知模块: 异步通知，并将处理结果同步至业务系统。
	4.	对账处理: 实现系统的交易数据，确保交易数据的准确性和一致性。
	5. 短信回调支持:短信回调支持,农业银行,建设银行,中国银行,平安银行,浦发银行,工商银行,邮储银行
	6. 需要支持其他银行请联系QQ：1310651206
  
  
# API接口
	1.	单笔下单接口
	2.	交易查询接口
	3.	余额查询接口
  
# 开发技术
	1.	Golang+CentOS+Postgres+Nginx+ReactJS
	2. 	商户API对接文档见doc/dev.html
	3. 	平台数据采用RSA2加密传输（同支付宝业务流程一样）

