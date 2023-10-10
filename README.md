# pr 工具箱

### 初始化项目依赖

```bash
npm i
```

### 帮助

- 在执行 <font color="#0097ff">npm i</font> 时，大概率会报错，请尝试使用以下两种方式解决。

#### 方式一

- 命令行

```bash

# 第一步：清除本地npm缓存 (可能需要)
npm cache clean -f

#  第二步：设置 electron 为指定的源地址

# 旧地址
npm set electron_mirror https://npm.taobao.org/mirrors/electron/

# 或者 新地址
npm set electron_mirror https://cdn.npmmirror.com/binaries/electron/

#  最后：重新安装依赖
npm i

```

#### 方式二

- 项目根目录创建 .npmrc 文件并复制以下内容（当前工程已内置），然后再次执行 <font color="#0097ff">npm i</font>

```bash

# 指定electron的安装源地址 (新地址)
electron_mirror=https://cdn.npmmirror.com/binaries/electron/

```
