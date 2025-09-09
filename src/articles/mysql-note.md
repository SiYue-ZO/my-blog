---
title : MySql 笔记
date : 2025-09-08
tag : 
  - MySql
  - 数据库
  - SQL

---

# 在ubuntu中安装mysql

## 安装
更新软件包列表
```bash
sudo apy update
```

查找可用安装包
```bash
sudo apt search mysql-server

```


```
#安装最新版本
sudo apt install  mysql-server
#安装指定版本
sudo apt install  mysql-server-8.0
```

## Linux下
1. 启动MySQL（适用于大多数现代Linux发行版，如Ubuntu，CentOS）
```bash
sudo systemctl start mysql
```

2. 关闭 MySQL 服务：
```bash
sudo systemctl stop mysql
```

3. 重启 MySQL 服务：
```bash
sudo systemctl restart mysql
```

4. 检查 MySQL 服务状态：
```bash
sudo systemctl status mysql
```
5. 使用管理员权限登录 MySQL
最常见的方式是使用 sudo 来以 root 身份登录 MySQL，这通常可以跳过密码验证（取决于您的 MySQL 安装配置）：

```bash
sudo mysql -u root
```

# MySQL用户设置
在 MySQL 中，用户设置包括创建用户、设置权限、管理用户等操作。以下是一些常用的 MySQL 用户设置操作，包括创建用户、设置权限、查看和删除用户等。

### 创建用户
要创建一个新用户，你可以使用以下 SQL 命令：
```bash
CREATE USER 'username'@'host' IDENTIFIED BY 'password';
```
> username：用户名。
  host：指定用户可以从哪些主机连接。例如，localhost 仅允许本地连接，% 允许从任何主机连接。
  password：用户的密码。

### 授权权限
创建用户后，你需要授予他们访问权限，使用 GRANT 命令来授予权限：
```bash
GRANT privileges ON database_name.* TO 'username'@'host';
```
> privileges：所需的权限，如 ALL PRIVILEGES、SELECT、INSERT、UPDATE、DELETE 等。
  database_name.*：表示对某个数据库或表授予权限。database_name.* 表示对整个数据库的所有表授予权限，database_name.table_name 表示对指定的表授予权限。
  TO 'username'@'host'：指定授予权限的用户和主机。
例如：
```bash
#赋予所有权限
GRANT ALL PRIVILEGES ON *.* TO 'sy'@'localhost' WITH GRANT OPTION;
```

### 刷新权限
授予或撤销权限后，需要刷新权限使更改生效。
```bash
FLUSH PRIVILEGES;
```

### 查看用户权限
要查看特定用户的权限，可以使用以下命令：
```bash
SHOW GRANTS FOR 'username'@'host';
```

### 撤销权限
要撤销用户的权限，使用 REVOKE 命令：
```bash
REVOKE privileges ON database_name.* FROM 'username'@'host';
```

### 修改用户密码
要修改用户的密码，可以使用 ALTER USER 命令：
```bash
ALTER USER 'username'@'host' IDENTIFIED BY 'new_password';
```
### 删除用户
如果需要删除用户，可以使用以下命令：
```bash
DROP USER 'username'@'host';
```

### 修改用户主机
要更改用户的主机（即允许从哪些主机连接），可以先删除用户，再重新创建一个新的用户。

实例
```bash
#删除旧用户
DROP USER 'john'@'localhost';
#重新创建用户并指定新的主机
CREATE USER 'john'@'%' IDENTIFIED BY 'password123';
创建用户时指定权限
在创建用户时，也可以同时授予权限（在 MySQL 8.0.16 及更高版本）：
```

实例
CREATE USER 'john'@'localhost' IDENTIFIED BY 'password123' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON test_db.* TO 'john'@'localhost';